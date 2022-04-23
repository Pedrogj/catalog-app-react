import React from "react";
import { SlideShow } from "../slideShow/SlideShow";
import { HomeCategory } from "./HomeCategory";
import { About } from "../about/About";

import { HomeContent } from "./HomeStyle";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <About />
      <HomeContent>
        <SlideShow />
      </HomeContent>
      <HomeCategory />
      <Footer />
    </>
  );
};
