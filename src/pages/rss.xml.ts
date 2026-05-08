import rss from '@astrojs/rss';
import { getPosts } from '../utils/posts';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

export async function GET(context: { site?: URL }) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_URL,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/blog/${p.data.slug}/`,
    })),
    customData: `<language>ko-KR</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate><atom:link href="${(context.site ?? SITE_URL).toString().replace(/\/$/, '')}/rss.xml" rel="self" type="application/rss+xml"/>`,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    stylesheet: false,
    trailingSlash: true,
  });
}
