import React from "react";
import { Container, Loader, Img } from "./SpinnerStyle";
import loading from "../../img/spinner.gif";

export const Spinner = () => {
  return (
    <Container>
      <Loader>
        <Img src={loading} alt="loading" />
      </Loader>
    </Container>
  );
};
