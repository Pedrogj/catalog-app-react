import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { useLoadingPages } from "../../hooks/useLoadingPages";
import { routes } from "../../routers/Routes";
import {
  Container,
  Box,
  Img,
  TextContent,
  H3,
  ContentPrice,
  ProductPrice,
  Button,
  LinkBack,
  ContentLink,
} from "./CategoryListStyle";
import { Spinner } from "../spinner/Spinner";
import { NotProduct } from "../notFountScreen/NotProduct";

export const CategoryList = ({ category }) => {
  const [loading] = useLoadingPages();

  const { getCategoriesById } = useContext(DataContext);

  const products = getCategoriesById(category);

  if (products.length < 1) {
    return <NotProduct />;
  }

  const requireProducts = products.map((item) => (
    <Box key={item.id}>
      <Link to={`/product/${item.id}`}>
        <Img src={item.img} alt={item.name} />
      </Link>
      <TextContent>
        <H3>{item.name}</H3>
      </TextContent>
      <ContentPrice>
        <ProductPrice>${item.price}</ProductPrice>
        <Link to={`/product/${item.id}`}>
          <Button>Ver Producto</Button>
        </Link>
      </ContentPrice>
    </Box>
  ));

  const requireContent = !loading ? <Spinner /> : requireProducts;

  return (
    <>
      <ContentLink>
        <LinkBack to={routes.root}>Regresar</LinkBack>
      </ContentLink>
      <Container>{requireContent}</Container>
    </>
  );
};
