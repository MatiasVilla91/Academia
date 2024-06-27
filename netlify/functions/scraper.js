const puppeteer = require('puppeteer');

exports.handler = async (event, context) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  
  await page.goto('https://hotmart.com/es/marketplace/productos/sueno-lucido-total-el-arte-del-sueno-consciente-y-la-experiencia-obe-en-30-dias/L52601728P?ref=H60828006O', { waitUntil: 'networkidle2' });

  const curso = await page.evaluate(() => {
    const titulo = document.querySelector('h1').innerText;
    const descripcion = document.querySelector('.content-description').innerText;
    const precio = document.querySelector('.price').innerText;

    return {
      titulo,
      descripcion,
      precio
    };
  });

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify(curso),
  };
};
