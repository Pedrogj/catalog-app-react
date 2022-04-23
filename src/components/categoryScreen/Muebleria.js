import React from "react";
import { CategoryList } from "./CategoryList";
import { Title } from "./CategoriesStyled";

export const Muebleria = () => {
  return (
    <>
      <Title>Muebleria</Title>
      <CategoryList category="muebleria" />
    </>
  );
};
