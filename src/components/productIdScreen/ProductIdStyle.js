import styled from "styled-components";
import { themeValue } from "../../utils/helpers/theme";

export const ContentBoton = styled.div`
  padding-left: 35px;

  @media (max-width: 980px) {
    padding-left: 40px;
  }
`;

export const ButtonExit = styled.button`
  background-color: ${() => themeValue.primary};
  color: white;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid ${() => themeValue.primary};
  cursor: pointer;
  font-size: ${() => themeValue.fontSize3};
  font-weight: ${() => themeValue.fontWeigth600};
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 20px;

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

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const TextH2 = styled.h2`
  font-size: ${() => themeValue.fontSize2};
`;

export const Description = styled.p`
  font-weight: 600;
  color: ${() => themeValue.grey};
  margin-top: 20px;
`;

export const Button = styled.a`
  background-color: ${() => themeValue.greenColor};
  color: white;
  display: inline-block;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${() => themeValue.fontSize3};
  font-weight: ${() => themeValue.fontWeigth600};
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 25px;
  width: 150px;

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

  @media (max-width: 500px) {
    width: 100%;
  }
`;
