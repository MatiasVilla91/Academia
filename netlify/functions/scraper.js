const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.hortmart.com/courses');

  // Espera que los datos de los cursos se carguen en la página
  await page.waitForSelector('.course-card');

  // Extraer la información de los cursos
  const courses = await page.evaluate(() => {
    const courseElements = document.querySelectorAll('.course-card');
    const courseList = [];
    
    courseElements.forEach(course => {
      const title = course.querySelector('.course-title').innerText;
      const description = course.querySelector('.course-description').innerText;
      const image = course.querySelector('.course-image').src;
      const details = course.querySelector('.course-details').innerText;

      courseList.push({
        title,
        description,
        image,
        details,
      });
    });

    return courseList;
  });

  // Guardar los datos en un archivo JSON
  const filePath = path.join('/tmp', 'courses.json');
  fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Datos guardados en courses.json', filePath: filePath })
  };
};
