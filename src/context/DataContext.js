import { createContext, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useLoading } from "../hooks/useLoading";

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
      const dataRef = await getDocs(query(collection(db, "products")));
      const dataDocs = [];

      dataRef.forEach((item) => {
        dataDocs.push({
          id: item.id,
          ...item.data(),
        });
      });
      setData(dataDocs);
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
    // Categorias Validas
    const validCategories = [
      "herramientas",
      "mascotas",
      "piscina",
      "tuberias",
      "muebleria",
      "aseo",
    ];
    if (!validCategories.includes(categories)) {
      throw new Error(`${categories} is not a valid category`);
    }
    return data.filter((e) => e.category === categories);
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
