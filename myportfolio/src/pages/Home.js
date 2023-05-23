import React, { useEffect, useState } from "react";
import "./Home.css";
import jesus2 from "../assets/images/jesus2..png";
import { SiJavascript, SiReact, SiNodedotjs, SiPhp, SiLaravel, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const text = "Soy desarrollador web full stack.";

  useEffect(() => {
    const delay = 100;

    const animateText = () => {
      const spans = document.querySelectorAll(".animate-text span");
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("show");
        }, index * delay);
      });

      setTimeout(() => {
        setShowImage(true);
      }, spans.length * delay);

      setTimeout(() => {
        setShowTechnologies(true);
      }, (spans.length + 1) * delay);

      setTimeout(() => {
        setShowSection(true);
      }, (spans.length + 1) * delay + 1000);
    };

    animateText();
  }, []);

  return (
  <>
    <section>
      <h2 className="tituloHome">
        <Link className="linkTituloHome" to={"./sobre-mi"}>
          Jesús Mendoza
        </Link>
      </h2>
        <div className="animate-text">
          {text.split("").map((character, index) => (
            <div>
              <span className="textoHome" key={index}>
                {character}
              </span>
            </div>
          ))}
        </div>
        {showImage && (
          <img
            className={`imageHome ${showTechnologies ? "show" : ""}` } 
            src={jesus2}
            alt="Imagen"
          />
        )}
      </section>
      <section className={`tecnologiasSection ${showSection ? "show" : ""}`}>
        <h2 className="tituloHome">Tecnologías</h2>
        <ul className="listaHome">
          <li>
            <SiJavascript /> Javascript
          </li>
          <li>
            <SiReact /> ReactJs
          </li>
          <li>
            <RiVuejsFill /> VueJs
          </li>
          <li>
            <SiNodedotjs /> NodeJs
          </li>
          <li>
            <SiPhp /> PHP
          </li>
          <li>
            <SiLaravel /> Laravel
          </li>
          <li>
            <FaDatabase /> SQL
          </li>
          <li>
            <SiMongodb /> MongoDB
          </li>
          <li>
            <SiHtml5 /> HTML
          </li>
          <li>
            <SiCss3 /> CSS
          </li>
        </ul>
      </section>
    </>
  );
};