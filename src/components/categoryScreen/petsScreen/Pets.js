import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Pets = () => {
  return (
    <>
      <Title>Categoría / Mascotas</Title>
      <CategoryList category="pets" />
    </>
  );
};
