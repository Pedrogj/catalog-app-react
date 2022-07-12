import React from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import logo from "./../../img/Tarjetas.png";
import {
  HomeImg,
  HomeText,
  Img,
  Section,
  ImgBox,
  Text,
  Title,
  ContentTextIcon,
  Icon,
} from "./FooterStyle";

export const Footer = () => {
  return (
    <>
      <Section>
        <HomeText>
          <Title>Ecuéntranos</Title>
          <ContentTextIcon>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            <Text>
              Ubicados en Camino San Bernardo 1274 Vía los Dominicos. Chillan,
              Chile.
            </Text>
          </ContentTextIcon>
          <ContentTextIcon>
            <Icon>
              <BiTime />
            </Icon>
            <Text>Lunes a Viernes: 9:00 AM a 13:00 / 15:00 a 19:00</Text>
          </ContentTextIcon>
          <ContentTextIcon>
            <Icon>
              <BiTime />
            </Icon>
            <Text>Sábado: 9:00 AM a 14:00</Text>
          </ContentTextIcon>
          <ContentTextIcon>
            <Icon>
              <FaWhatsapp />
            </Icon>
            <Text>+56950841782</Text>
          </ContentTextIcon>
        </HomeText>
        <HomeImg>
          <ImgBox>
            <Img src={logo} alt="buy card" />
          </ImgBox>
        </HomeImg>
      </Section>
    </>
  );
};
