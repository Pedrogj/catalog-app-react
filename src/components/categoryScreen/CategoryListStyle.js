import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 960px) {
    padding-bottom: 50px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Box = styled.div`
  border: none;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s;
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TextContent = styled.div`
  padding: 10px;
`;

export const H3 = styled.h3`
  font-size: ${() => themeValue.fontSize3};
`;
