import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "../components/homeScreen/Home";
import { Products } from "../components/productsScreen/Products";
import { Navbar } from "../components/navbar/Navbar";
import { ProductId } from "../components/productIdScreen/ProductId";
import { Tools } from "../components/categoryScreen/toolsScreen/Tools";
import { Pets } from "../components/categoryScreen/petsScreen/Pets";
import { Pool } from "../components/categoryScreen/poolScreen/Pool";
import { Furniture } from "../components/categoryScreen/furnitureScreen/Furniture";
import { Pipelines } from "../components/categoryScreen/pipelinesScreen/Pipelines";
import { Cleaning } from "../components/categoryScreen/cleaningScreen/Cleaning";
import { DataContext } from "../context/DataContext";
import { NotFound } from "../components/notFountScreen/NotFound";
import { NavbarMobile } from "../components/navbarMobile/NavbarMobile";
import { routes } from "./Routes";
import { Spinner } from "../components/spinner/Spinner";

export const AppRouter = () => {
  const { loading } = useContext(DataContext);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  const requireContent = !showContent ? <Spinner /> : loading;

  return (
    <HashRouter>
      {requireContent}
      <Navbar />
      <Routes>
        <Route path={routes.root} element={<Home />} />

        <Route path={routes.allProducts} element={<Products />} />
        <Route path={routes.productDetail} element={<ProductId />} />

        <Route path={routes.toolsScreen} element={<Tools />} />
        <Route path={routes.petsScreen} element={<Pets />} />
        <Route path={routes.poolScreen} element={<Pool />} />
        <Route path={routes.furnitureScreen} element={<Furniture />} />
        <Route path={routes.pipelinesScreen} element={<Pipelines />} />
        <Route path={routes.cleaningScreen} element={<Cleaning />} />

        <Route path={routes.notFoundScreen} element={<NotFound />} />
      </Routes>
      <NavbarMobile />
    </HashRouter>
  );
};
