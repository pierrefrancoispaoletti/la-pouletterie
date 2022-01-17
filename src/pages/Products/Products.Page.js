import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import ProductItem from "../../components/ProductItem/ProductItem";
import CustomButton from "../../components/CustoButton/CustomButton";
import { selectProduct } from "../../redux/reducers/product/product.actions";

const ProductsPage = () => {
  const params = useParams();
  const { category: paramCat } = params;
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  return (
    <main>
      {categories.map(
        (category) =>
          category.slug === paramCat && (
            <>
              <CategoryTitle>{category.name}</CategoryTitle>
              {products.map(
                (product) =>
                  product.category === paramCat && (
                    <ProductItem {...product}>
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
            </>
          )
      )}
    </main>
  );
};

export default ProductsPage;
