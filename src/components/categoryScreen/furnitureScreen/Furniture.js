import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Furniture = () => {
  return (
    <>
      <Title>Muebleria</Title>
      <CategoryList category="furniture" />
    </>
  );
};
