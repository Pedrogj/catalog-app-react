import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 100%;
`;

export const TextH1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  padding: 10px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
