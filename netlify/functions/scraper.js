const puppeteer = require('puppeteer');
const { parse } = require('json2csv');

exports.handler = async (event, context) => {
  // Función de espera genérica
  function waitForTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
    const getTextContent = (selector) => {
      const element = document.querySelector(selector);
      return element ? element.innerText : 'No disponible';
    };

    const titulo = getTextContent('h1');
    const descripcion = getTextContent('.content-description');
    const precio = getTextContent('.price');
    const autor = getTextContent('.author-name'); // Ejemplo de autor
    const fecha = getTextContent('.release-date'); // Ejemplo de fecha de lanzamiento

    return {
      titulo,
      descripcion,
      precio,
      autor,
      fecha,
    };
  });

  console.log('Esperando 2 segundos antes de cerrar el navegador...');
  await waitForTimeout(2000);

  await browser.close();

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
  ];

  // Convertir a CSV si prefieres esa opción
  const csv = parse(estructura);

  return {
    statusCode: 200,
    body: JSON.stringify({
      json: estructura,
      csv: csv
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
