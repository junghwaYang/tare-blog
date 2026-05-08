import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * 전체 포스트 목록 반환
 * - PROD 환경에서는 draft: true 포스트 제외
 * - pubDate 내림차순 정렬
 */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => {
    if (import.meta.env.PROD) {
      return data.draft !== true;
    }
    return true;
  });

  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/**
 * 특정 태그를 가진 포스트 목록 반환 (pubDate desc)
 */
export async function getPostsByTag(tag: string): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

/**
 * 특정 카테고리의 포스트 목록 반환 (pubDate desc)
 */
export async function getPostsByCategory(category: string): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.data.category === category);
}

/**
 * 모든 태그 목록 반환 (중복 제거, 알파벳순)
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}

/**
 * 모든 카테고리 목록 반환 (중복 제거, 알파벳순)
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getPosts();
  const categorySet = new Set<string>();
  for (const post of posts) {
    categorySet.add(post.data.category);
  }
  return Array.from(categorySet).sort();
}
