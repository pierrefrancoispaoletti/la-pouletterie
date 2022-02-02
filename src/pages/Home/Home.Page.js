import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { categories } from "../../data/categories";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustoButton/CustomButton";
import { selectProduct } from "../../redux/reducers/product/product.actions";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import AdminBar from "../../components/AdminBar/AdminBar";
import { ProductsContainer } from "./home.style";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const user = useSelector(selectUserTokenDecoded);
  return (
    <main>
      {categories.map((category) => (
        <div key={category.slug}>
          <Link
            style={{ textDecoration: "none" }}
            to={`produits/${category.slug}`}
          >
            <CategoryTitle>{category.name}</CategoryTitle>
          </Link>
          <ProductsContainer horizontal>
            {products.map(
              (product) =>
                product.category === category.slug && (
                  <div key={product._id}>
                    <AdminBar {...product} />
                    {/* si le produit n'est pas caché ou que 
                    l'utilisateur est admin montrer le produit 
                    sinon on ne le montre pas */}
                    {(!product.hidden ||
                      (user && user.user.role === "admin")) && (
                      <ProductItem {...product}>
                        <CustomButton
                          type="button"
                          onClick={() => dispatch(selectProduct(product))}
                        >
                          Voir plus
                        </CustomButton>
                      </ProductItem>
                    )}
                  </div>
                )
            )}
          </ProductsContainer>
        </div>
      ))}
    </main>
  );
};

export default HomePage;
