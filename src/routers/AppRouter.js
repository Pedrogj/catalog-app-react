import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../components/homeScreen/Home";
import { Products } from "../components/productsScreen/Products";
import { Navbar } from "../components/navbar/Navbar";
import { ProductId } from "../components/productIdScreen/ProductId";
import { Herramientas } from "../components/categoryScreen/Herramientas";
import { Mascotas } from "../components/categoryScreen/Mascotas";
import { Piscina } from "../components/categoryScreen/Piscina";
import { Muebleria } from "../components/categoryScreen/Muebleria";
import { Tuberias } from "../components/categoryScreen/Tuberias";
import { Aseo } from "../components/categoryScreen/Aseo";
import { DataContext } from "../context/DataContext";

export const AppRouter = () => {
  const { loading } = useContext(DataContext);
  return (
    <BrowserRouter>
      {loading}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductId />} />

        <Route path="/category/herramientas" element={<Herramientas />} />
        <Route path="/category/mascotas" element={<Mascotas />} />
        <Route path="/category/piscina" element={<Piscina />} />
        <Route path="/category/muebleria" element={<Muebleria />} />
        <Route path="/category/tuberias" element={<Tuberias />} />
        <Route path="/category/aseo" element={<Aseo />} />
      </Routes>
    </BrowserRouter>
  );
};
