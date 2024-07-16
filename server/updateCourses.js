const fs = require('fs');

const estructura = JSON.parse(fs.readFileSync('estructura.json', 'utf8'));
const coursesDataPath = './src/data/coursesData.js';

const newCourse = {
  id: Date.now(),  // Generate a unique ID
  title: estructura.titulo,
  description: estructura.descripcion || 'No disponible',
  price: estructura.precio || 'No disponible',
  image: estructura.imagenes[7],  // Asumiendo que la imagen principal es la octava en la lista
  details: estructura.encabezados.p.join(' ')  // Concatenar todos los párrafos
};

const coursesData = require(coursesDataPath);

coursesData.push(newCourse);

fs.writeFileSync(coursesDataPath, `const courses = ${JSON.stringify(coursesData, null, 2)};\n\nexport default courses;`, 'utf8');

console.log('Course added successfully!');
