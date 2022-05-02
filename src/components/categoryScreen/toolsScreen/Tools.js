import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Tools = () => {
  return (
    <>
      <Title>Herramientas</Title>
      <CategoryList category="tools" />
    </>
  );
};
