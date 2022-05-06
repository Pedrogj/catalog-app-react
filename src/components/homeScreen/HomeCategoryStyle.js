import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Title = styled.h2`
  padding-top: 20px;
  padding-left: 20px;
  font-size: ${() => themeValue.fontSize4};

  @media (max-width: 425px) {
    font-size: ${() => themeValue.fontSize2};
  }

  @media (max-width: 335px) {
    font-size: ${() => themeValue.fontSize3};
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Text = styled.h3`
  padding-bottom: 5px;

  @media (max-width: 425px) {
    font-size: ${() => themeValue.fontSize3};
  }

  @media (max-width: 335px) {
    font-size: ${() => themeValue.fontSize5};
  }
`;

export const Content = styled.div`
  display: grid;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  opacity: 1;
  transition: all 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    opacity: 0.7;
  }
`;
