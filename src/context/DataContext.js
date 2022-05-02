import { createContext, useEffect, useState } from "react";
import { useLoading } from "../hooks/useLoading";
import { getAllProducts } from "../services/products";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, showLoading, hideLoading] = useLoading();

  useEffect(() => {
    getData();
  }, []);

  // GET DATA FIRESTORE
  const getData = async () => {
    try {
      showLoading();
      const products = await getAllProducts();

      setData(products);
      hideLoading();
    } catch (error) {
      //console.log(error);
    }
  };

  // GET PRODUCT BY ID
  const getProductById = (id = "") => {
    //console.log("get product by Id called");
    return data.find((product) => product.id === id);
  };

  // GET CATEGORIES
  const getCategoriesById = (categories) => {
    // valid categories
    const validCategories = [
      "tools",
      "pets",
      "pool",
      "pipelines",
      "furniture",
      "cleaning",
    ];
    if (!validCategories.includes(categories)) {
      throw new Error(`${categories} is not a valid category`);
    }
    return data.filter((item) => item.category === categories);
  };

  const dataBase = {
    data,
    getData,
    getProductById,
    getCategoriesById,
    loading,
  };

  return (
    <DataContext.Provider value={dataBase}>{children}</DataContext.Provider>
  );
};
