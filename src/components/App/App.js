import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home/Home.Page";
import ProductsPage from "../../pages/Products/Products.Page";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/produits/:category" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
