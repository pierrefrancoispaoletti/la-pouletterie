import React, { lazy, Suspense } from "react";

import { useSelector } from "react-redux";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";
import {
  selectIsAddProductModalOpen,
  selectIsUpdateProductModalOpen,
  selectLoading,
} from "../../redux/reducers/app/app.selectors";

import { useFetchAllProducts } from "../../CustomHooks/useFetchAllProducts";

import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import LocalMessage from "../LocalMessage/LocalMessage";
import ProductDetail from "../ProductDetail/ProductDetail";
import AdminTopBar from "../AdminTopBar/AdminTopBar";
import UserBar from "../UserTopBar/UserTopBar";
import Loader from "../Loader/Loader";
import ProductModal from "../ProductModal/ProductModal";
import UpdateProductModal from "../UpdateProductModal/UpdateProductModal";

import { AppContainer } from "./app.style";
import { useCheckToken } from "../../CustomHooks/useCheckToken";
import UpdatePasswordElement from "../UpdatePasswordElement/UpdatePasswordElement";

// const Login = lazy(() => import("../../pages/Login/Login"));

const Checkout = lazy(() => import("../../pages/Checkout/Checkout"));
const HomePage = lazy(() => import("../../pages/Home/Home.Page"));
const Login = lazy(() => import("../../pages/Login/Login"));
const ProductsPage = lazy(() => import("../../pages/Products/Products.Page"));
const Register = lazy(() => import("../../pages/Register/Register"));
const User = lazy(() => import("../../pages/User/User"));
const Payment = lazy(() => import("../../pages/Payment/Payment"));
const UserOrders = lazy(() => import("../../pages/UserOrders/UserOrders"));
const AdminOrders = lazy(() => import("../../pages/AdminOrders/AdminOrders"));
const AdminReports = lazy(() =>
  import("../../pages/AdminReports/AdminReports")
);

const App = () => {
  const user = useSelector(selectUserTokenDecoded);
  const isLoading = useSelector(selectLoading);
  const isAddProductModalOpen = useSelector(selectIsAddProductModalOpen);
  const isUpdateProductModalOpen = useSelector(selectIsUpdateProductModalOpen);
  useFetchAllProducts();
  useCheckToken();
  return (
    <AppContainer>
      <Header />
      <Menu />
      {user && user.user.role === "client" && <UserBar />}
      {user && user.user.role === "admin" && <AdminTopBar />}
      <LocalMessage />
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/produits/:category" element={<ProductsPage />} />
          <Route path="/connexion" element={!user ? <Login /> : <HomePage />} />
          <Route
            path="/inscription"
            element={!user ? <Register /> : <HomePage />}
          />
          <Route path="/vos-infos" element={user ? <User /> : <HomePage />} />
          <Route
            path="/vos-commandes"
            element={user ? <UserOrders /> : <HomePage />}
          />
          <Route path="/panier" element={<Checkout />} />
          <Route path="/paiement" element={user ? <Payment /> : <HomePage />} />
          <Route
            path="/commandes"
            element={
              user && user.user.role === "admin" ? (
                <AdminOrders />
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="/rapports"
            element={
              user && user.user.role === "admin" ? (
                <AdminReports />
              ) : (
                <HomePage />
              )
            }
          />
        </Routes>
      </Suspense>
      <ProductDetail />
      {user && user.user.role === "admin" && isAddProductModalOpen && (
        <ProductModal />
      )}
      {user && user.user.role === "admin" && isUpdateProductModalOpen && (
        <UpdateProductModal />
      )}
      <UpdatePasswordElement />
    </AppContainer>
  );
};

export default App;
