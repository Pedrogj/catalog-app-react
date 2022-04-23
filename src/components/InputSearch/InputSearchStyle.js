import styled from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 30px;
  background-color: #f0f0f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 30px;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: #f0f0f5;

  /*
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 400px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3); 

  @media (max-width: 500px) {
    width: 100%;
  } */
`;
