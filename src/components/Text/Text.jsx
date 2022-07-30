import "./text.css";

function Text(props) {
  return (
    <div className="container-biblioteca">
      <h2 className="tittleParagrafo">{props.tittlePrincipal}</h2>
      <p className="textParagrafo">{props.textParagrafo}</p>
    </div>
  );
}

export default Text;
