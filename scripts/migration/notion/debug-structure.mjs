import { createRequire } from 'module';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/yangjeonghwa/dev/blog/.env' });

const require = createRequire(import.meta.url);
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const ROOT = process.env.NOTION_ROOT_PAGE_ID;

console.log('ROOT:', ROOT);
console.log('TOKEN prefix:', process.env.NOTION_TOKEN?.slice(0, 20));

// 루트 페이지 정보 조회
try {
  const page = await notion.pages.retrieve({ page_id: ROOT });
  console.log('\n[루트 페이지]');
  console.log('object:', page.object);
  console.log('created_time:', page.created_time);
  const titleProp = page.properties?.title || page.properties?.Title || page.properties?.Name;
  if (titleProp?.title) {
    console.log('title:', titleProp.title.map(t => t.plain_text).join(''));
  }
} catch(e) {
  console.log('pages.retrieve 오류:', e.code, e.message);
}

// 블록 목록 조회
try {
  const blocks = await notion.blocks.children.list({ block_id: ROOT, page_size: 100 });
  console.log('\n[하위 블록]');
  console.log('count:', blocks.results.length);
  console.log('has_more:', blocks.has_more);
  for (const b of blocks.results) {
    let label = '';
    if (b.type === 'child_page') label = b.child_page?.title;
    else if (b.type === 'child_database') label = b.child_database?.title;
    else if (b[b.type]?.rich_text) label = b[b.type].rich_text.map(t => t.plain_text).join('');
    console.log(`  [${b.type}] ${label || ''} (id: ${b.id})`);
  }
} catch(e) {
  console.log('blocks.children.list 오류:', e.code, e.message);
}
