import About from "../../components/About/About";
import ContentReverse from "../../components/contentReverse/ContentReverse";
import Content from "../../components/content/Content";
import Testes from "../../img/qaengineers1.svg";
import QAImage from "../../img/qaengineers2.svg";
import QABiblioteca from "../../img/biblioteca.svg"

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
      <ContentReverse
      image={QABiblioteca}
      tittle ="Conheça a nossa biblioteca de conteúdo da área!"  
      />
      
     
</>
  );
}

export default Home;
