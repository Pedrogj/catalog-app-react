import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { InputSearch } from "../InputSearch/InputSearch";
import { NotProduct } from "../notFountScreen/NotProduct";
import { Spinner } from "../spinner/Spinner";
import {
  ContentBoton,
  ButtonExit,
  Container,
  ProductContent,
  Box,
  Img,
  TextContent,
  H1,
  H3,
} from "./ProductsStyle";

export const Products = () => {
  const { data } = useContext(DataContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  // Product search function
  const search = (elements) => {
    return elements.filter((element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Products List
  const allProducts = search(data).map((item) => {
    return (
      <Box key={item.id}>
        <Link to={`/product/${item.id}`}>
          <Img src={item.img} alt={item.name} />
        </Link>
        <TextContent>
          <H3>{item.name}</H3>
        </TextContent>
      </Box>
    );
  });

  const renderProducts =
    allProducts.length > 0 ? (
      <ProductContent>{allProducts}</ProductContent>
    ) : (
      <NotProduct />
    );

  return (
    <>
      <Container>
        <H1>Productos</H1>
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Container>

      {!showContent ? <Spinner /> : renderProducts}
    </>
  );
};
