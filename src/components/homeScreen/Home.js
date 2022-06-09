import React from "react";
import { SlideShow } from "../slideShow/SlideShow";
import { HomeCategory } from "./HomeCategory";
import { About } from "../about/About";

import { HomeContent } from "./HomeStyle";
import { Footer } from "../footer/Footer";
import { Slide } from "../slide/Slide";

export const Home = () => {
  return (
    <>
      <Slide />
      <About />
      <HomeContent>
        <SlideShow />
      </HomeContent>
      <HomeCategory />
      <Footer />
    </>
  );
};
