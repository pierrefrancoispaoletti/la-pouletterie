import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { categories } from "../../data/categories";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustoButton/CustomButton";
import { selectProduct } from "../../redux/reducers/product/product.actions";
import { selectProducts } from "../../redux/reducers/product/product.selectors";

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
                <ProductItem {...product} key={product._id}>
                  <>
                    <CustomButton
                      type="button"
                      onClick={() => dispatch(selectProduct(product))}
                    >
                      Voir le produit
                    </CustomButton>
                  </>
                </ProductItem>
              )
          )}
        </div>
      ))}
    </main>
  );
};

export default HomePage;
