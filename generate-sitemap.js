const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// URLs de ejemplo, debes reemplazar con las URLs de tu sitio
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  // Agrega más URLs según sea necesario
];

const sitemap = new SitemapStream({ hostname: 'https://thriving-starlight-79d570.netlify.app/'});

streamToPromise(
  sitemap.pipe(createWriteStream(resolve(__dirname, 'public/sitemap.xml')))
).then(() => console.log('Sitemap creado con éxito'));

links.forEach(link => sitemap.write(link));
sitemap.end();
