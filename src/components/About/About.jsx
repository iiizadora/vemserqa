import Piramide from "../../img/piramideTestes.png";
import "./about.css";
function About() {
  return (
    <div className="container-about">
      <div className="about-info">
        <h1 className="about-tittle">Vem ser QA!</h1>

        <p className="about-text">
          Site para todas as pessoas que tem interesse e queiram dar os primeiros passos na área de Quality Assunrance &#40;Qualidade do software&#41;. Aqui você irá encontrar conteúdos gratuitos, conhecer pessoas da área para seguir e aprender mais sobre Testes de Software!
        
      </p>
      </div>
      <img
          className="about-image"
          src={Piramide}
          alt="Imagem da piramide de testes"
        />
      
    </div>
  );
}

export default About;
