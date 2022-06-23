import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Pool = () => {
  return (
    <>
      <Title>Categoría / Piscina</Title>
      <CategoryList category="pool" />
    </>
  );
};
