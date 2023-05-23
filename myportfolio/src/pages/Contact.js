import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneInboundFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { dataContactService } from "../services/index";
import "./Contact.css";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dataContactService({ nombre, email, telefono, comentario });
      setMensaje(data);
      setNombre("");
      setEmail("");
      setTelefono("");
      setComentario("");
      setTimeout(() => {
        setMensaje("");
      }, 5000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
        setMensaje("");
      }, 5000);
    }
  };

  return (
    <>
      <h2 className="tituloContact">Contacto</h2>
      <section className="contenedorContact">
        <form className="formContact" onSubmit={handleSubmit}>
          <label>
            <input
              className="inputContact"
              type="text"
              value={nombre}
              required
              onChange={(e) => setNombre(e.target.value)}
              name="name"
              placeholder="Nombre"
            />
          </label>
          <label>
            <input
              className="inputContact"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              name="name"
              placeholder="Correo electrónico"
            />
          </label>
          <label>
            <input
              className="inputContact"
              type="tel"
              value={telefono}
              required
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono"
            />
          </label>
          <label>
            <textarea
              className="inputContact textareaContact"
              value={comentario}
              required
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Comentario"
            />
            <div className="divButtonContact">
              <button className="buttonContact">Enviar</button>
            </div>
            <span> <p className="mensajeContact">{mensaje}</p></span>
            <div>{error && <p className="error">{error}</p>}</div>
          </label>
        </form>
      </section>
      <section>
        <h3 className="titleDatosContacto">Datos de contacto</h3>
        <ul className="ulDatosContacto">
          <li className="liDatosContacto">
            <TfiEmail />
            <a href="mailto:jmendoza@jesusmmendoza.es" className=" aEmailContacto">
              jmendoza@jesusmmendoza.es
            </a>
          </li>
          <li>
            <BsTelephoneInboundFill />
            <span className="telDatosContacto"> +34695425475</span>
          </li>
          <li className="liDatosContacto">
            <BsLinkedin />
            <a
              href="https://www.linkedin.com/in/jesusmendozaz/"
              className=" aDatosContacto"
            >
              LinkedIn
            </a>
          </li>
          <li className="liDatosContacto">
            <BsGithub />
            <a
              href="https://github.com/jesusmmen28"
              className=" aDatosContacto"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
