import React from "react";
import { CategoryList } from "./CategoryList";
import { Title } from "./CategoriesStyled";

export const Herramientas = () => {
  return (
    <>
      <Title>Herramientas</Title>
      <CategoryList category="herramientas" />
    </>
  );
};
