import React from "react";
import { SlideShow } from "../slideShow/SlideShow";
import { HomeCategory } from "./HomeCategory";
import { About } from "../about/About";
import { HomeContent } from "./HomeStyle";
import { Footer } from "../footer/Footer";
import { Slide } from "../slide/Slide";
import { SlideMobile } from "../slideMobile/SlideMobile";

export const Home = () => {
  return (
    <>
      <Slide />
      <SlideMobile />
      <About />
      <HomeContent>
        <SlideShow />
      </HomeContent>
      <HomeCategory />
      <Footer />
    </>
  );
};
