import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../img/slide1.jpg";
import img2 from "../../img/slide2.jpg";
import img3 from "../../img/slide3.jpg";
import {
  Container,
  Content,
  ContentSlide,
  SlideImg,
  ContentButtons,
  Img,
  Button,
} from "./SlideStyle";

export const Slide = () => {
  const slideShow = useRef(null);

  const next = () => {
    // Comprobamos que el slideShow tenga elementos
    if (slideShow.current.children.length > 0) {
      // Obtenemos el primer elemento del slideShow
      const elemetPrimary = slideShow.current.children[0];

      // Establecemos la transicion para el slideShow
      slideShow.current.style.transition = `300ms ease-out all`;

      // Calculamos el tamaño del slide
      const sizeSlide = slideShow.current.children[0].offsetWidth;

      // Mover el slideShow
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transition = () => {
        // Reiniciamos la posicion del slideShow
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final
        slideShow.current.appendChild(elemetPrimary);

        slideShow.current.removeEventListener("transitionend", transition);
      };

      // Eventlistener para cuando termine la animacion
      slideShow.current.addEventListener("transitionend", transition);
    }
  };

  const previous = () => {
    if (slideShow.current.children.length > 0) {
      // Obtener el ultimo elemento del slideShow
      const index = slideShow.current.children.length - 1;
      const endElement = slideShow.current.children[index];
      slideShow.current.insertBefore(endElement, slideShow.current.firstChild);

      slideShow.current.style.transition = "none";

      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translate(-${sizeSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = "300ms ease-out all";
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <Container>
      <Content>
        <ContentSlide ref={slideShow}>
          <SlideImg>
            <Img src={img1} alt="" />
          </SlideImg>
          <SlideImg>
            <Img src={img2} alt="" />
          </SlideImg>
          <SlideImg>
            <Img src={img3} alt="" />
          </SlideImg>
        </ContentSlide>
        <ContentButtons>
          <Button onClick={previous}>
            <IoIosArrowBack />
          </Button>
          <Button right onClick={next}>
            <IoIosArrowForward />
          </Button>
        </ContentButtons>
      </Content>
    </Container>
  );
};
