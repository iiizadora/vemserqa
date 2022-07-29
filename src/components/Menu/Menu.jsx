import { Link } from "react-router-dom";
import "./menu.css";
import Logo from "../../img/qalogotipo-removebg.png";
function Menu() {
  return (
    <div className="container-menu">
      <div className="image-menu">
        <Link to="/">
          <img className="image-logo" src={Logo} alt="Logo do site" />
        </Link>
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li className="item">
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/historia">
              História
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/bibliotecaqa">
              Biblioteca QA
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/quiz">
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
