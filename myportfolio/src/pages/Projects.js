import "./Projects.css";
import { useRef, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import ShareLinks from "../assets/videos/ShareLinks.mp4";
import Nutrifit from "../assets/videos/Nutrifit.mp4";

export const Projects = () => {
  const ref = useRef();
  const [showPlay, setShowPlay] = useState(true);

  const handleClick = () => {
    setShowPlay(false);
    ref.current.play();
  };
  return (
    <section className="contenedorProjects">
      <section>
        <h2 className="titleProjects">ShareLink</h2>
        <div className="contenido">
          <div className="player">
            {showPlay && (
              <div className="controls">
                <div onClick={handleClick} className="play-button">
                  ▷
                </div>
              </div>
            )}
            <video controls={!showPlay} src={ShareLinks} ref={ref} />
          </div>
        </div>
        <div className="divProjects">
          <p>ShareLink es una red social para compartir enlaces. Esta aplicación fue desarrollada con JavaScript, ReactJs, NodeJs, HTML, CCS y SQL.</p>
          <ul className="listaProjects ">
            <li className="liProjects">
              <SiJavascript />
            </li>
            <li className="liProjects">
              <SiReact />
            </li>
            <li className="liProjects">
              <SiNodedotjs />
            </li>
            <li className="liProjects">
              <FaDatabase />
            </li>
            <li className="liProjects">
              <SiHtml5 />
            </li>
            <li className="liProjects">
              <SiCss3 />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="titleProjects borderProjects">NutriFit</h2>
        <div className="contenido">
          <div className="player">
            {showPlay && (
              <div className="controls">
                <div onClick={handleClick} className="play-button">
                  ▷
                </div>
              </div>
            )}
            <video controls={!showPlay} src={Nutrifit} ref={ref} />
          </div>
        </div>
        <div className="divProjects divProjects1">
          <p>Nutrifit es un sitio web de nutrición y fitness, desarrollado con JavaScript, ReactJs, NodeJs, HTML, CCS y SQL.</p>
          <ul className="listaProjects">
            <li className="liProjects">
              <SiJavascript />
            </li>
            <li className="liProjects">
              <SiReact />
            </li>
            <li className="liProjects">
              <SiNodedotjs />
            </li>
            <li className="liProjects">
              <FaDatabase />
            </li>
            <li className="liProjects">
              <SiHtml5 />
            </li>
            <li className="liProjects">
              <SiCss3 />
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
