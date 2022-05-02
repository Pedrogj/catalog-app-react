import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { cleanSearchText } from "../../utils/helpers/helpers";
import { InputSearch } from "../InputSearch/InputSearch";
import { NotProduct } from "../notFountScreen/NotProduct";
import { Spinner } from "../spinner/Spinner";
import {
  Container,
  ProductContent,
  Box,
  Img,
  TextContent,
  H1,
  H3,
  DivConten,
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
    const text = cleanSearchText(searchTerm.toLowerCase());
    return elements.filter((element) =>
      element.name.toLowerCase().includes(text)
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

  const requireContent = !showContent ? <Spinner /> : renderProducts;

  return (
    <>
      <DivConten>
        <Container>
          <H1>Productos</H1>
          <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Container>
        {requireContent}
      </DivConten>
    </>
  );
};
