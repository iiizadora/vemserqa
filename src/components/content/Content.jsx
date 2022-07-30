
import Button from "../Button/Button";
import "./content.css";

function Content(props) {
  return (
    <div className="container">
      <div className="container-content">
        <img
          className="image-content"
          src={props.image}
          alt={props.description}
        />
        <div className="box-content">
          <h2 className="tittle">{props.tittle}</h2>
          <div>
            <Button text="Saiba mais"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
