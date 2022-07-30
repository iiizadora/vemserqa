
import "./about.css";
function About(props) {
  return (
    <div className="container-about">
      <div className="about-info">
        <h1 className="about-tittle">{props.children}</h1>

        <p className="about-text">
          {props.textAbout}
        </p>
      </div>
      <img
        className="about-image"
        src={props.image}
        alt={props.description}
      />
    </div>
  );
}

export default About;
