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
import {
  selectIsAddProductModalOpen,
  selectIsUpdateProductModalOpen,
  selectLoading,
} from "../../redux/reducers/app/app.selectors";
import { AppContainer } from "./app.style";
import AdminTopBar from "../AdminTopBar/AdminTopBar";
import { useFetchAllProducts } from "../../CustomHooks/useFetchAllProducts";
import ProductModal from "../ProductModal/ProductModal";
import UpdateProductModal from "../UpdateProductModal/UpdateProductModal";
import Payment from "../../pages/Payment/Payment";

const App = () => {
  const user = useSelector(selectUserTokenDecoded);
  const isLoading = useSelector(selectLoading);
  const isAddProductModalOpen = useSelector(selectIsAddProductModalOpen);
  const isUpdateProductModalOpen = useSelector(selectIsUpdateProductModalOpen);
  useFetchAllProducts();
  return (
    <AppContainer>
      <Header />
      <Menu />
      {user && user.user.role === "client" && <UserBar />}
      {user && user.user.role === "admin" && <AdminTopBar />}
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
        <Route path="/paiement" element={user ? <Payment /> : <HomePage />} />
      </Routes>
      <ProductDetail />
      {user && user.user.role === "admin" && isAddProductModalOpen && (
        <ProductModal />
      )}
      {user && user.user.role === "admin" && isUpdateProductModalOpen && (
        <UpdateProductModal />
      )}
    </AppContainer>
  );
};

export default App;
