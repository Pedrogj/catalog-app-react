import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { Container, Box, Img, TextContent, H3 } from "./CategoryListStyle";

export const CategoryList = ({ category }) => {
  const { getCategoriesById } = useContext(DataContext);

  const products = getCategoriesById(category);

  return (
    <>
      <Link to="/"></Link>
      <Container>
        {products.map((item) => (
          <Box key={item.id}>
            <Link to={`/product/${item.id}`}>
              <Img src={item.img} alt="" />
            </Link>
            <TextContent>
              <H3>{item.name}</H3>
            </TextContent>
          </Box>
        ))}
      </Container>
    </>
  );
};
