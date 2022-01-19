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
import UserBar from "../UserTopBar/UserTopBar";
import User from "../../pages/User/User";
import Loader from "../Loader/Loader";
import { selectLoading } from "../../redux/reducers/app/app.selectors";
import { AppContainer } from "./app.style";

const App = () => {
  const user = useSelector(selectUserTokenDecoded);
  const isLoading = useSelector(selectLoading);
  return (
    <AppContainer>
      <Header />
      <Menu />
      {user && user.user.role === "client" && <UserBar />}
      <LocalMessage />
      {isLoading && <Loader />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/produits/:category" element={<ProductsPage />} />
        <Route path="/connexion" element={!user ? <Login /> : <HomePage />} />
        <Route
          path="/inscription"
          element={!user ? <Register /> : <HomePage />}
        />
        <Route path="/vos-infos" element={user ? <User /> : <HomePage />} />
        <Route path="/panier" element={<Checkout />} />
      </Routes>
      <ProductDetail />
    </AppContainer>
  );
};

export default App;
