import React from "react";
import { Link } from "react-router-dom";
import { dataImg } from "../../dataImg/dataImg";
import { Title, Box, Text, Content, Img } from "./HomeCategoryStyle";

export const HomeCategory = () => {
  return (
    <>
      <Title>Categorías</Title>
      <Box>
        {dataImg.map((item) => (
          <Content key={item.id}>
            <Text>{item.name}</Text>
            <Link to={item.url}>
              <Img src={item.image} alt={item.name} />
            </Link>
          </Content>
        ))}
      </Box>
    </>
  );
};
