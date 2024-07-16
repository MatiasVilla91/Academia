const puppeteer = require('puppeteer');
const fs = require('fs');

// Función de espera genérica
function waitForTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  
  console.log('Navegando a la página...');
  await page.goto('https://hotmart.com/es/marketplace/productos/sueno-lucido-total-el-arte-del-sueno-consciente-y-la-experiencia-obe-en-30-dias', { waitUntil: 'networkidle2' });

  console.log('Esperando 3 segundos...');
  await waitForTimeout(3000);

  console.log('Extrayendo datos...');
  const estructura = await page.evaluate(() => {
    const tituloElement = document.querySelector('h1');
    const descripcionElement = document.querySelector('.content-description');
    const precioElement = document.querySelector('.price');

    const titulo = tituloElement ? tituloElement.innerText : 'No disponible';
    const descripcion = descripcionElement ? descripcionElement.innerText : 'No disponible';
    const precio = precioElement ? precioElement.innerText : 'No disponible';
    
    return { titulo, descripcion, precio };
  });

  console.log('Esperando 2 segundos antes de cerrar el navegador...');
  await waitForTimeout(2000);

  console.log('Añadiendo secciones...');
  // Añadir secciones de ejemplo (modificar según necesidades)
  estructura.secciones = [
    {
      nombre: 'Introducción',
      contenido: 'Contenido de la introducción...'
    },
    {
      nombre: 'Capítulo 1',
      contenido: 'Contenido del capítulo 1...'
    },
    // Puedes añadir más secciones aquí según la estructura de la web
  ];

  await browser.close();

  console.log('Guardando estructura en archivo JSON...');
  // Guardar la estructura en un archivo JSON
  fs.writeFileSync('estructura.json', JSON.stringify(estructura, null, 2));

  console.log('Estructura guardada en estructura.json');
})();
