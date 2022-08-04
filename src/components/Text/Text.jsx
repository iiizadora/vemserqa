import "./text.css";

function Text(props) {
  return (
    <div className="container-biblioteca">
      <h2 className="tittleParagrafo">{props.tittlePrincipal}</h2>
      <div className="div-text">
        <p className="textParagrafo">{props.textParagrafo} <a href={props.link} className=" linkParagrafo" target="_blank">Leia mais aqui.</a></p>        
      </div>
    </div>
  );
}

export default Text;
