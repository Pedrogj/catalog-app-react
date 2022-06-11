import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100vw;
  height: 35vh;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 501px) {
    display: none;
  }
`;

export const Row = styled.div`
  position: relative;
`;

export const Content = styled(motion.div)`
  position: absolute;
  width: 60vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  top: -15vh;

  @media (max-width: 435px) {
    width: 62vw;
  }

  @media (max-width: 375px) {
    top: -12vh;
  }

  @media (max-width: 330px) {
    top: -10vh;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;
