import React from "react";
import { SlideShow } from "../slideShow/SlideShow";
import { useLoadingPages } from "../../hooks/useLoadingPages";
import { HomeCategory } from "./HomeCategory";
import { About } from "../about/About";
import { HomeContent } from "./HomeStyle";
import { Footer } from "../footer/Footer";
import { Slide } from "../slide/Slide";
import { SlideMobile } from "../slideMobile/SlideMobile";
import { Spinner } from "../spinner/Spinner";

export const Home = () => {
  const [loading] = useLoadingPages();

  const PageContent = () => {
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

  const requireContent = !loading ? <Spinner /> : <PageContent />;

  return <>{requireContent}</>;
};
