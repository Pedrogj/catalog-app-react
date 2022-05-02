import React from "react";
import { CategoryList } from "../CategoryList";
import { Title } from "../CategoriesStyled";

export const Pool = () => {
  return (
    <>
      <Title>Mascotas</Title>
      <CategoryList category="pool" />
    </>
  );
};
