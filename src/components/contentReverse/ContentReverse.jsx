import { Link } from "react-router-dom";
import "./contentReverse.css";

function ContentReverse(props) {
  return (
    <div className="containerReverse">
      <div className="container-contentReverse">
        <img
          className="image-contentReverse"
          src={props.image}
          alt={props.description}
        />
        <div className="box-content">
          <h2 className="tittleReverse">{props.tittle}</h2>
          <div className="container-buttonReverse">
            <Link className="buttonReverse" to="/bibliotecaqa">
              venha aprender
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentReverse;
