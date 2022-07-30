import { Link } from "react-router-dom";
import "./button.css";

function Button(props) {
  return (
    <div className="container-button">
      <Link className="button" to="/carreira">
        {props.text}
      </Link>
    </div>
  );
}

export default Button;
