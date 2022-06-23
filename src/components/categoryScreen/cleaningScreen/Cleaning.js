import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Cleaning = () => {
  return (
    <>
      <Title>Categoría / Aseo</Title>
      <CategoryList category="cleaning" />
    </>
  );
};
