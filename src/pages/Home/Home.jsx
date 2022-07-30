import About from "../../components/About/About";
import Content from "../../components/content/Content";
import Testes from "../../img/qaengineers1.svg";
import QAImage from "../../img/qaengineers2.svg";
function Home() {
  return (
    <>
      <About
      children="Vem ser QA!"
      textAbout="Site para todas as pessoas que tem interesse e queiram dar os
      primeiros passos na área de Quality Assunrance &#40;Qualidade do
      software&#41;. Aqui você irá encontrar conteúdos gratuitos, conhecer
      pessoas da área para seguir e aprender mais sobre Testes de Software!"
      image={Testes}
      description ="Imagem de duas pessoas em frente a uma prancheta escrita QA"
      />
      <Content
      image={QAImage}
      tittle ="Você sabe o que um QA faz?"
      />
      <About/>
</>
  );
}

export default Home;
