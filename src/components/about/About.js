import React from "react";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";
import {
  Container,
  HomeImg,
  HomeText,
  Img,
  Row,
  Section,
  ImgBox,
  Text,
  Button,
} from "./AboutStyle";

export const About = () => {
  return (
    <Section>
      <Container>
        <Row>
          <HomeText>
            <Text>
              Dedicados a la venta en todo lo que abarca productos de
              ferretería. Trabajamos con las marcas de herramientas y productos
              mas sobresalientes del mercado chileno.
            </Text>

            <Link to="/products">
              <Button>Ver Productos</Button>
            </Link>
          </HomeText>
          <HomeImg>
            <ImgBox>
              <Img src={logo} alt="ferromaster-logo" />
            </ImgBox>
          </HomeImg>
        </Row>
      </Container>
    </Section>
  );
};
