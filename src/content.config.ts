import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(1).max(300),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string().regex(/^[a-z0-9가-힣-]+$/, 'tag는 소문자·숫자·하이픈·한글만 허용')).default([]),
    category: z.string().regex(/^[a-z0-9-]+$/, 'category는 소문자·숫자·하이픈만 허용'),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    draft: z.boolean().default(false),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
    // 마이그레이션 예약 필드
    originalUrl: z.string().url().optional(),
    series: z.string().optional(),
    ogImage: z.string().optional(),
  }).refine(
    (d) => !d.heroImage || !!d.heroImageAlt,
    { message: 'heroImage가 있으면 heroImageAlt 필수', path: ['heroImageAlt'] }
  ),
});

export const collections = { blog };
