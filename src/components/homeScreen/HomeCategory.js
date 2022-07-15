import React from "react";
import { Link } from "react-router-dom";
import { dataImg } from "../../dataImageCategories/dataImg";
import { Title, Box, Text, Content, Img, Container } from "./HomeCategoryStyle";

export const HomeCategory = () => {
  return (
    <Container>
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
    </Container>
  );
};
