import type { APIRoute } from 'astro';
import { getPosts } from '../../utils/posts';
import { generateOgImage } from '../../og/generateOgImage';
import { SITE_TITLE, SITE_URL } from '../../consts';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: {
      title: post.data.title,
      category: post.data.category,
      pubDate: post.data.pubDate,
    },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { title, category, pubDate } = props as {
    title: string;
    category: string;
    pubDate: Date;
  };

  const png = await generateOgImage({
    title,
    category,
    pubDate,
    siteTitle: SITE_TITLE,
    siteUrl: new URL(SITE_URL).hostname,
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
