import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Loader } from "./SpinnerStyle";
import lottie from "../../utils/lottiejson/lottie.json";

export const Spinner = () => {
  return (
    <Container>
      <Loader>
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </Loader>
    </Container>
  );
};
