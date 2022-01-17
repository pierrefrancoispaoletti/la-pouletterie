import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
import HomePage from "../../pages/Home/Home.Page";
import Login from "../../pages/Login/Login";
import ProductsPage from "../../pages/Products/Products.Page";
import Header from "../Header/Header";
import LocalMessage from "../LocalMessage/LocalMessage";
import Menu from "../Menu/Menu";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";
import Register from "../../pages/Register/Register";

const App = () => {
  const user = useSelector(selectUserTokenDecoded);
  return (
    <div>
      <Header />
      <Menu />
      <LocalMessage />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/produits/:category" element={<ProductsPage />} />
        <Route path="/connexion" element={!user ? <Login /> : <HomePage />} />
        <Route
          path="/inscription"
          element={!user ? <Register /> : <HomePage />}
        />
        <Route path="/panier" element={<Checkout />} />
      </Routes>
      <ProductDetail />
    </div>
  );
};

export default App;
