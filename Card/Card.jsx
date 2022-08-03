import "./card.css";
const conteudo = [
  {
    id: 1,
    canal: "Lelemaine",
    descricao:
      "Letícia Maine é uma QA da Oracle e traz informação de forma divertida e leve sobre a área.",
    link: "https://www.youtube.com/c/lelemainechannel/featured",
  },
  {
    id: 2,
    canal: "Julio de Lima",
    descricao:
      "Júlio de Lima tem ajudado a disseminar a disciplina de testes de software dentre a comunidade de engenharia de software no Brasil.",
    link: "https://www.youtube.com/c/JuliodeLimas/featured",
  },
  {
    id: 3,
    canal: "Pessonizado",
    descricao:
      "Vinicius Pessoni fala sobre Programação, Teste de Software, Carreira em Computação e como é viver e trabalhar com TI na Europa.",
    link: "https://www.youtube.com/c/pessonizando/featured",
  },
  {
    id: 4,
    canal: "Iterasys",
    descricao:
      "Canal sobre Teste de Software e QA (Quality Assurance),considerado o principal centro de treinamento do segmento na América Latina.",
    link: "https://www.youtube.com/c/IterasysBrasil/featured",
  },
];
function Card() {
  return (
    <>
      <div className="cartao-container">
        {conteudo.map((projeto) => {
          return (
            <div className="card-container" key={projeto.id}>
              <h3 className="card-tittle">{projeto.canal}</h3>
              <p className="card-paragrafo">{projeto.descricao}</p>
              <a href={projeto.link} className="card-link" target="_blank">
                Conheça o canal
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
