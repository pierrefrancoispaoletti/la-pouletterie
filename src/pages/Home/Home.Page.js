import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { categories } from "../../data/categories";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustoButton/CustomButton";
import { selectProduct } from "../../redux/reducers/product/product.actions";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import AdminBar from "../../components/AdminBar/AdminBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  return (
    <main>
      {categories.map((category) => (
        <div key={category.slug}>
          <CategoryTitle>{category.name}</CategoryTitle>
          {products.map(
            (product) =>
              product.category === category.slug && (
                <div key={product._id}>
                  <AdminBar {...product} />
                  <ProductItem {...product}>
                    <CustomButton
                      type="button"
                      onClick={() => dispatch(selectProduct(product))}
                    >
                      Voir le produit
                    </CustomButton>
                  </ProductItem>
                </div>
              )
          )}
        </div>
      ))}
    </main>
  );
};

export default HomePage;
