import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <ul className="menu">
        <li className="item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/conteudo">
            Conteúdo
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/aprendizado">
            Onde aprender?
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/quiz">
            Quiz
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
