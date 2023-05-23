import "./About.css";
import jesus1 from "../assets/images/jesus1.jpg";

export const About = () => {
  return (
  <>
    <section>
      <h2 className="titleAbout">Sobre mi</h2>
      <article className="articleAbout">
        <p>
          Como programador, poseo una sólida experiencia en diversas
          tecnologías, incluyendo Node.js, ReactJs, Javascript, MySQL, HTML y
          CSS. Además, estoy constantemente ampliando mis conocimientos en
          tecnologías como PHP, Laravel y Vue. Me dedico a fortalecer mis
          habilidades y conocimientos a través de proyectos personales y
          participando en formaciones especializadas.
        </p>
        <p className="pArticleAbout">
          También, cuento con experiencia en el ámbito periodístico, lo cual me
          ha dotado de habilidades comunicativas y organizacionales
          excepcionales. Mi capacidad para adaptarme rápidamente a situaciones
          cambiantes y trabajar bajo presión ha sido fundamental para mi
          crecimiento profesional en diversas áreas. Además, he tenido éxito en
          la gestión de equipos de trabajo.
        </p>
      </article>
      <article>
        <div className="containerImg">
          <h3 className="titleAbout">Jesús Mendoza</h3>
          <figure className="figImgAbout">
            <img className="imgAbout" src={jesus1} alt="fotoanto" />
          </figure>
          <p className="pAbout">Programador y desarrollador Full Stack</p>
        </div>
        <p className="pAbout1">
          Me caracterizo por ser una persona trabajadora, alegre y puntual. Mi
          meta principal es seguir creciendo como programador y desarrollar mis
          habilidades. Estoy constantemente interesado en aprender nuevas
          tecnologías y metodologías de trabajo, con el objetivo de contribuir
          de manera más efectiva al crecimiento de cualquier empresa. Me
          esfuerzo por mejorar continuamente mis habilidades y estar al tanto de
          las últimas tendencias del sector.
        </p>
      </article>
    </section>
  </>
  );
};
