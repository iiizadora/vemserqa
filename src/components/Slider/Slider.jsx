import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import Card from "../CardSlider/CardSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Card
            title={"Lelemaine"}
            video={"https://www.youtube.com/embed/rX1MJwVAlus"}
            textOne={
              "Letícia Maine é uma QA da Oracle e traz informação de forma divertida e leve sobre a área."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title={"Julio de Lima"}
            video={"https://www.youtube.com/embed/XkVm1SqsfQM"}
            textOne={
              "Júlio de Lima tem ajudado a disseminar a disciplina de testes de software dentre a comunidade de engenharia de software no Brasil."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title={"Pessonizando"}
            video={"https://www.youtube.com/embed/NnamjfPYuiY"}
            textOne={
              "Vinicius Pessoni fala sobre Programação, Teste de Software, Carreira em Computação e como é viver e trabalhar com TI na Europa."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title={"Iterasys"}
            video={"https://www.youtube.com/embed/J4hHQjSwOnA"}
            textOne={
              "Canal sobre Teste de Software e QA (Quality Assurance),considerado o principal centro de treinamento do segmento na América Latina."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
