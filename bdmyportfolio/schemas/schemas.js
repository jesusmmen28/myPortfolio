const Joi = require("joi");

const contactSchema = Joi.object().keys({
  nombre: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(new Error("El nombre debe tener mínimo 3 caracteres y máximo 50")),
  email: Joi.string()
    .required()
    .email()
    .max(100)
    .error(new Error("El email debe ser una direccion de email válida")),
  telefono: Joi.string()
    .required()
    .min(9)
    .max(13)
    .error(new Error("Debe ser un número de teléfono válido")),
  comentario: Joi.string()
    .min(10)
    .max(200)
    .error(new Error("El comentario debe tener mínimo 10 caracteres y máximo 200")),
});

module.exports = { contactSchema };
