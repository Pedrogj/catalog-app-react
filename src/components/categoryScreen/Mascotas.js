import React from "react";
import { CategoryList } from "./CategoryList";
import { Title } from "./CategoriesStyled";

export const Mascotas = () => {
  return (
    <>
      <Title>Mascotas</Title>
      <CategoryList category="mascotas" />
    </>
  );
};
