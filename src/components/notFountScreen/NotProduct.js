import React from "react";
import { VscError } from "react-icons/vsc";
import { Box, Icon, TextH1 } from "./NotProductStyle";

export const NotProduct = () => {
  return (
    <Box>
      <Icon>
        <VscError />
      </Icon>
      <TextH1>Este producto no esta disponile</TextH1>
    </Box>
  );
};
