const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // o cualquier otro ORM/ODM que estés utilizando

const app = express();
app.use(bodyParser.json());

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el esquema y modelo del curso
const cursoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  precio: String,
  autor: String,
  fecha: String,
  duracion: String,
  categorias: [String],
  beneficios: [String],
  requisitos: [String],
  contenidoCurso: [String],
  imagenes: [String],
  acordeon: [{
    titulo: String,
    contenido: String,
  }],
  encabezados: {
    h1: [String],
    h2: [String],
    h3: [String],
    h4: [String],
    h5: [String],
    h6: [String],
    p: [String],
  },
});

const Curso = mongoose.model('Curso', cursoSchema);

// Endpoint para cargar los datos del JSON a la base de datos
app.post('/cargar-datos', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'estructura.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const cursos = JSON.parse(data);

    for (const cursoData of cursos) {
      const curso = new Curso(cursoData);
      await curso.save();
    }

    res.status(200).send('Datos cargados exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar los datos');
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
