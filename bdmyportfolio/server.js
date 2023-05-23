require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { newComentario } = require('./controllers/comentario');


const app = express();

app.use(express.json());
app.use(cors());


app.post('/comentario', newComentario);

// Middleware de 404

app.use((req, res) => {
    res.status(404).send({
      status: 'error',
      message: 'Not found',
    });
  });
  
  // Middleware de gestión de errores
  app.use((error, req, res, next) => {
    console.error(error);
  
    res.status(error.httpStatus || 500).send({
      status: 'error',
      message: error.message,
    });
  });
  
  // Lanzamos el servidor
  app.listen(3000, () => {
    console.log('Servidor escuchando!');
  });