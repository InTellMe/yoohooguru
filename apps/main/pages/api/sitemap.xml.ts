import { NextApiRequest, NextApiResponse } from 'next';
import {
  HUBS,
  getHubUrl,
  HUBS_WITHOUT_STANDARD_PAGES,
  STANDARD_HUB_PAGES,
} from '@/config/hubs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://www.yoohoo.guru';
  
  // Main domain pages
  const mainPages = [
    '',
    'about',
    'how-it-works',
    'pricing',
    'contact',
    'blog',
    'hubs',
    'help',
    'faq',
    'terms',
    'privacy',
    'cookies',
    'safety',
    'login',
    'signup',
    'skills/coding'
  ];

  const mainUrls = mainPages.map((page) => ({
    loc: `${baseUrl}/${page}`,
    priority: page === '' ? '1.0' : '0.8',
  }));

  const hubUrls = HUBS.flatMap((hub) => {
    const hubBase = getHubUrl(hub.subdomain);
    const urls = [
      { loc: hubBase, priority: '0.9' },
      { loc: `${hubBase}/blog`, priority: '0.7' },
    ];

    if (!HUBS_WITHOUT_STANDARD_PAGES.has(hub.subdomain)) {
      STANDARD_HUB_PAGES.forEach((page) => {
        urls.push({ loc: `${hubBase}/${page}`, priority: '0.7' });
      });
    }

    return urls;
  });

  const allUrls = [...mainUrls, ...hubUrls];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}