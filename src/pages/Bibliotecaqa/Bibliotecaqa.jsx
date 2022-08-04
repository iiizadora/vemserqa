import Card from "../../components/About/Card/Card";
import Text from "../../components/Text/Text";
import Slider from "../../components/Slider/Slider";
import "swiper/css";
function Bibliotecaqa() {
  return (
    <>
      <div className="content-biblioteca">
        <div>
          <Text
            tittlePrincipal="Canais do Youtube que você precisa conhecer"
            textParagrafo=" Confira a lista dos melhores canais que fala sobre a área de Quality Assurance!"
          />
        </div>
      </div>

      <div className="section_slider_container">
        <Slider />
      </div>
    </>
  );
}

export default Bibliotecaqa;
