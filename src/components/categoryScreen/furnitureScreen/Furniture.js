import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Furniture = () => {
  return (
    <>
      <Title>Categoría / Mueblería</Title>
      <CategoryList category="furniture" />
    </>
  );
};
