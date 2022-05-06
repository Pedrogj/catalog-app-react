import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Section = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${() => themeValue.primary};
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  padding: 0px 25px 0px 25px;
  display: flex;

  @media (max-width: 960px) {
    padding: 0;
    flex-wrap: wrap;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const HomeText = styled.div`
  width: 100%;
  padding: 15px;

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: ${() => themeValue.fontSize4};
  margin-bottom: 20px;

  @media (max-width: 960px) {
    font-size: ${() => themeValue.fontSize2};
  }
`;

export const ContentTextIcon = styled.div`
  display: flex;

  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    justify-content: start;
  }
`;

export const Icon = styled.div`
  font-size: ${() => themeValue.fontSize2};
  margin-right: 3px;
`;

export const Text = styled.p`
  font-size: ${() => themeValue.fontSize2};
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 960px) {
    font-size: ${() => themeValue.fontSize3};
    text-align: start;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
`;

export const HomeImg = styled.div`
  width: 100%;
  padding: 15px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ImgBox = styled.div`
  max-width: 300px;
  margin: auto;
`;
