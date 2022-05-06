import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Title = styled.h1`
  padding-left: 20px;
  padding-top: 10px;
  font-size: ${() => themeValue.fontSize4};

  @media (max-width: 500px) {
    font-size: ${() => themeValue.fontSize2};
  }
`;
