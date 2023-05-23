
const { getConnection } = require('./db');

const createComentario = async (nombre, email, telefono, comentario) => {
    let connection;
  
    try {
      connection = await getConnection();
      const nuevoComentario = await connection.query(
        `
      INSERT INTO contacto (nombre, email, telefono, comentario) VALUES(?, ?, ?, ?)
    `,
      [nombre, email, telefono, comentario]
    );
  
    return nuevoComentario;
    } finally {
      if (connection) connection.release();
    }
  };

  module.exports = {
    createComentario,
  };