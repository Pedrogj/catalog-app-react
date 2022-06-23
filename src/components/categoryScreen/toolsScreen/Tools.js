import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Tools = () => {
  return (
    <>
      <Title>Categoría / Herramientas</Title>
      <CategoryList category="tools" />
    </>
  );
};
