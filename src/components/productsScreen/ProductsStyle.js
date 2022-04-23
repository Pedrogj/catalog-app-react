import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const H1 = styled.h1`
  @media (max-width: 500px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: center;
  padding: 20px;

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
  font-size: 15px;
`;
