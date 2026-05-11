import { createRequire } from 'module';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/yangjeonghwa/dev/blog/.env' });

const require = createRequire(import.meta.url);
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const ROOT = process.env.NOTION_ROOT_PAGE_ID;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function deepScan(blockId, depth, label) {
  const indent = '  '.repeat(depth);
  await sleep(300);
  let response;
  try {
    response = await notion.blocks.children.list({ block_id: blockId, page_size: 100 });
  } catch(e) {
    console.log(`${indent}[ERROR] ${e.code}: ${e.message}`);
    return;
  }

  for (const b of response.results) {
    let title = '';
    if (b.type === 'child_page') title = b.child_page?.title;
    else if (b.type === 'child_database') title = b.child_database?.title;
    else if (b[b.type]?.rich_text) title = b[b.type].rich_text.map(t => t.plain_text).join('').slice(0, 60);

    console.log(`${indent}[${b.type}] "${title}" id:${b.id}`);

    // 재귀할 타입
    if (['column_list', 'column', 'child_page', 'toggle', 'bulleted_list_item', 'linked_to_page'].includes(b.type) && depth < 4) {
      await deepScan(b.id, depth + 1, b.type);
    }
  }
}

console.log('=== 깊은 구조 탐색 ===');
await deepScan(ROOT, 0, 'root');
