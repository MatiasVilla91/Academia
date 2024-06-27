const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url = require('url');

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
  await page.goto('https://hotmart.com/es/marketplace/productos/sueno-lucido-total-el-arte-del-sueno-consciente-y-la-experiencia-obe-en-30-dias/L52601728P?ref=H60828006O', { waitUntil: 'networkidle2' });

  console.log('Esperando 3 segundos...');
  await waitForTimeout(3000);

  console.log('Extrayendo datos...');
  const estructura = await page.evaluate(() => {
    const getTextContent = (selector) => {
      const element = document.querySelector(selector);
      return element ? element.innerText : 'No disponible';
    };

    const getMultipleTextContent = (selector) => {
      const elements = document.querySelectorAll(selector);
      return Array.from(elements).map(element => element.innerText);
    };

    const getImageSrc = (selector) => {
      const element = document.querySelector(selector);
      return element ? element.src : 'No disponible';
    };

    const getMultipleImageSrc = (selector) => {
      const elements = document.querySelectorAll(selector);
      return Array.from(elements).map(element => element.src);
    };

    const titulo = getTextContent('h1');
    const descripcion = getTextContent('.content-description');
    const precio = getTextContent('.price');
    const autor = getTextContent('.seller-link');
    const fecha = getTextContent('.release-date');
    const duracion = getTextContent('.duration');
    const categorias = getMultipleTextContent('.category-tag');
    const beneficios = getMultipleTextContent('.benefits li');
    const requisitos = getMultipleTextContent('.requirements li');
    const contenidoCurso = getMultipleTextContent('.course-content li');
    const imagenes = getMultipleImageSrc('img'); // Obtiene todas las imágenes

    const p = getMultipleTextContent('p');
    const h1 = getMultipleTextContent('h1');
    const h2 = getMultipleTextContent('h2');
    const h3 = getMultipleTextContent('h3');
    const h4 = getMultipleTextContent('h4');
    const h5 = getMultipleTextContent('h5');
    const h6 = getMultipleTextContent('h6');

    return {
      titulo,
      descripcion,
      precio,
      autor,
      fecha,
      duracion,
      categorias,
      beneficios,
      requisitos,
      contenidoCurso,
      imagenes,
      encabezados: {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p
      }
    };
  });

  // Convertir URLs relativas a absolutas
  const baseUrl = 'https://hotmart.com';
  estructura.imagenes = estructura.imagenes.map(imgUrl => {
    if (imgUrl.startsWith('/')) {
      return url.resolve(baseUrl, imgUrl);
    }
    return imgUrl;
  });

  // Filtrar URLs inválidas
  estructura.imagenes = estructura.imagenes.filter(imgUrl => imgUrl.startsWith('http'));

  console.log('Guardando imágenes...');
  const imageFolder = path.join(__dirname, 'images');
  if (!fs.existsSync(imageFolder)) {
    fs.mkdirSync(imageFolder);
  }

  // Descarga las imágenes
  for (const [index, src] of estructura.imagenes.entries()) {
    if (src !== 'No disponible') {
      const imagePath = path.join(imageFolder, `image${index}.jpg`);
      const writer = fs.createWriteStream(imagePath);

      try {
        const response = await axios({
          url: src,
          method: 'GET',
          responseType: 'stream'
        });

        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });
      } catch (error) {
        console.error(`Error al descargar la imagen: ${src}`, error);
      }
    }
  }

  console.log('Esperando 2 segundos antes de cerrar el navegador...');
  await waitForTimeout(2000);

  await browser.close();

  console.log('Guardando estructura en archivo JSON...');
  // Guardar la estructura en un archivo JSON
  fs.writeFileSync('estructura.json', JSON.stringify(estructura, null, 2));

  console.log('Estructura guardada en estructura.json');
})();
