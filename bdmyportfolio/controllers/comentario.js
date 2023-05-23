
const {createComentario}= require('../db/comentario');
const {contactSchema} = require('../schemas/schemas')


const newComentario = async (req, res, next) => {
    try {
      await contactSchema.validateAsync(req.body);
      const { nombre, email, telefono, comentario } = req.body;

     await createComentario(
        nombre,
        email,
        telefono,
        comentario
      );
      res.send({
        status: 'ok',
        message: `${nombre} el mensaje ha sido enviado correctamente`,
      });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    newComentario
  };