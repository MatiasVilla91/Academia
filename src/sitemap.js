const fs = require('fs');
const path = require('path');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://thriving-starlight-79d570.netlify.app/',
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/course/1', changefreq: 'weekly', priority: 0.8 },
    { url: '/course/2', changefreq: 'weekly', priority: 0.8 },
    // Agrega aquí todas las rutas de tu aplicación
  ]
});

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap.toString());
