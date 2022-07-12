import React from "react";
import logo from "./../../img/logo.png";
import {
  Container,
  HomeImg,
  HomeText,
  Img,
  Row,
  Section,
  ImgBox,
  TextH1,
  TextP,
  Button,
} from "./AboutStyle";

export const About = () => {
  return (
    <Section>
      <Container>
        <Row>
          <HomeText>
            <TextH1>FerroMaster</TextH1>
            <TextP>
              Dedicados a la venta en todo lo que abarca productos de
              ferretería. Trabajamos con las marcas de herramientas y productos
              mas sobresalientes del mercado chileno.
            </TextP>

            <Button to="/products">Ver Productos</Button>
          </HomeText>
          <HomeImg>
            <ImgBox>
              <Img src={logo} alt="ferromaster" />
            </ImgBox>
          </HomeImg>
        </Row>
      </Container>
    </Section>
  );
};
