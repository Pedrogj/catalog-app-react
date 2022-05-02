import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { routes } from "../../routers/Routes";
import { Container, Box, Img, TextContent, H3 } from "./CategoryListStyle";

export const CategoryList = ({ category }) => {
  const { getCategoriesById } = useContext(DataContext);

  const products = getCategoriesById(category);

  const requireProducts = products.map((item) => (
    <Box key={item.id}>
      <Link to={`/product/${item.id}`}>
        <Img src={item.img} alt="" />
      </Link>
      <TextContent>
        <H3>{item.name}</H3>
      </TextContent>
    </Box>
  ));

  return (
    <>
      <Link to={routes.root}></Link>
      <Container>{requireProducts}</Container>
    </>
  );
};
