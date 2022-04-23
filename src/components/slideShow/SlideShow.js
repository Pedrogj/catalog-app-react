import React from "react";
import img1 from "./../../img/banner-3.jpg";
import { Container, Banner } from "./SlideShowStyle";

export const SlideShow = () => {
  return (
    <Container>
      <Banner>
        <img src={img1} alt="img1" />
      </Banner>
    </Container>
  );
};
