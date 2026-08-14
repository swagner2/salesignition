import fs from 'fs';
import path from 'path';

const baseUrl = 'https://salesignition.com';
const projectRoot = process.cwd();

const urls = [
  { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${baseUrl}/blog`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${baseUrl}/audit`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/cartsos`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/retention-os`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/retention-dash`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/work-with-me`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/home-test`, priority: '0.7', changefreq: 'monthly' }
];

const blogDir = path.join(projectRoot, 'src/content/blog');
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  for (const file of files) {
    if (file.endsWith('.mdoc') || file.endsWith('.md')) {
      const slug = file.replace(/\.(mdoc|md)$/, '');
      urls.push({
        loc: `${baseUrl}/blog/${slug}`,
        priority: '0.8',
        changefreq: 'monthly'
      });
    }
  }
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
}
xml += '</urlset>\n';

const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs at ${sitemapPath}`);
