import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;

export const ContentSlide = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;

export const SlideImg = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  position: relative;
  z-index: 2;
`;

export const Img = styled.img`
  width: 100%;
  vertical-align: top;

  @media (max-width: 500px) {
    height: 100px;
  }
`;

export const ContentButtons = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  pointer-events: all;
  font-size: 40px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  z-index: 5;

  &:hover {
    background: rgb(0, 0, 0, 0.2);
  }

  ${(props) => (props.right ? "right: 0" : "left: 0")}
`;
