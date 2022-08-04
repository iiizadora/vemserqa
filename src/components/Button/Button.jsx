import { Link } from "react-router-dom";
import "./button.css";

function Button(props) {
  return (
    <div className="container-button">
      <Link className="button" to="/guia">
        {props.text}
      </Link>
    </div>
  );
}

export default Button;
