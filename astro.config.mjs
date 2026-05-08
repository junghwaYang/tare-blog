// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      // F8: sitemap에 RSS 피드 URL 포함
      customPages: [`${SITE_URL}/rss.xml`],
    }),
  ],
  markdown: {
    shikiConfig: {
      // 라이트/다크 듀얼 테마 — CSS 변수로 전환 (FOUC 방지와 연동)
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
