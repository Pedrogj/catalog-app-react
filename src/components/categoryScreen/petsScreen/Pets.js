import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Pets = () => {
  return (
    <>
      <Title>Mascotas</Title>
      <CategoryList category="pets" />
    </>
  );
};
