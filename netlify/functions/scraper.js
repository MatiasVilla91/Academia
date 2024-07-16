const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url = require('url');

// Función de espera genérica
function waitForTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Lista de URLs de cursos
const courseUrls = [
  'https://hotmart.com/es/marketplace/productos/sueno-lucido-total-el-arte-del-sueno-consciente-y-la-experiencia-obe-en-30-dias/L52601728P?ref=H60828006O',
  'https://hotmart.com/es/marketplace/productos/curso-de-meditacion-avanzado/P29568052C?ref=B45059024O',
  'https://hotmart.com/es/marketplace/productos/aprendeameditar/W44428651N?ref=G45109559A',
  'https://astrocurso.com/tarotdeangeles/?ref=X93875938X'

];

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const courses = [];

  for (const courseUrl of courseUrls) {
    const page = await browser.newPage();

    console.log(`Navegando a la página: ${courseUrl}`);
    await page.goto(courseUrl, { waitUntil: 'networkidle2' });

    console.log('Esperando 3 segundos...');
    await waitForTimeout(3000);

    // Expandir todos los elementos del acordeón
    await page.evaluate(() => {
      const acordeonButtons = document.querySelectorAll('.accordion-button');
      acordeonButtons.forEach(button => button.click());
    });

    console.log('Esperando 2 segundos para que el acordeón se expanda...');
    await waitForTimeout(2000);

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

      const acordeon = Array.from(document.querySelectorAll('.accordion-item')).map(item => ({
        titulo: item.querySelector('.accordion-header') ? item.querySelector('.accordion-header').innerText : 'No disponible',
        contenido: item.querySelector('.accordion-body') ? item.querySelector('.accordion-body').innerText : 'No disponible'
      }));

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
        acordeon,
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

    courses.push(estructura);

    await page.close();
  }

  await browser.close();

  console.log('Guardando estructura en archivo JSON...');
  // Guardar la estructura en un archivo JSON
  fs.writeFileSync('cursos.json', JSON.stringify(courses, null, 2));

  console.log('Estructura guardada en cursos.json');
})();
