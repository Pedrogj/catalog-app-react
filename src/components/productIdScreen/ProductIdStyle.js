import styled from "styled-components";

export const ContentBoton = styled.div`
  padding-left: 30px;

  @media (max-width: 500px) {
    padding-left: 40px;
  }
`;

export const ButtonExit = styled.button`
  background-color: black;
  color: white;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
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

  @media (max-width: 500px) {
    font-weight: 300;
    font-size: 14px;
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

export const TextH1 = styled.h1`
  font-size: 25px;
`;

export const Description = styled.p`
  margin-top: 20px;
`;

export const Button = styled.a`
  background-color: green;
  color: white;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 8px;
  border: 2px solid green;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
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

  @media (max-width: 500px) {
    padding: 5px 20px;
    font-weight: 300;
    width: 100%;
  }
`;
