import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const Section = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0px 25px 0px 25px;
  display: flex;

  @media (max-width: 960px) {
    padding: 0;
    flex-wrap: wrap;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
`;

export const HomeText = styled.div`
  width: 50%;
  padding: 15px;

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;

export const HomeImg = styled.div`
  width: 50%;
  padding: 15px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const ImgBox = styled.div`
  max-width: 360px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: ${() => themeValue.fontSize1};
  margin-bottom: 20px;

  @media (max-width: 960px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  font-size: ${() => themeValue.fontSize2};
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 960px) {
    font-size: 15px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  background-color: ${() => themeValue.primary};
  color: white;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 8px;
  border: 2px solid ${() => themeValue.primary};
  cursor: pointer;
  font-size: ${() => themeValue.fontSize3};
  font-weight: ${() => themeValue.fontWeigth600};
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 25px;
  width: 200px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
  &:disable {
    pointer-events: none;
  }
`;
