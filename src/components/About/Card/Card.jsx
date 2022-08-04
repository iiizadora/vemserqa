import "./card.css";
const conteudo = [
  {
    id: 1,
    canal: "Etapa 1",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
    
  },
  {
    id: 2,
    canal: "Etapa 2",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 3,
    canal: "Etapa 3",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 4,
    canal: "Etapa 4",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 5,
    canal: "Etapa 5",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 6,
    canal: "Etapa 6",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 7,
    canal: "Etapa 7",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
  },
  {
    id: 8,
    canal: "Etapa 8",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, placeat. Soluta molestias itaque explicabo obcaecati eveniet, adipisci dolore consequuntur eaque enim numquam distinctio nihil neque illum quam dolorum fuga consectetur.",
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
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
