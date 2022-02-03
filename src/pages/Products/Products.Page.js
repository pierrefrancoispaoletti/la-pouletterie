import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import ProductItem from "../../components/ProductItem/ProductItem";
import AdminBar from "../../components/AdminBar/AdminBar";
import { ProductsContainer } from "../Home/home.style";

const ProductsPage = () => {
  const params = useParams();
  const { category: paramCat } = params;
  const products = useSelector(selectProducts);
  return (
    <main>
      {categories.map(
        (category) =>
          category.slug === paramCat && (
            <div key={category.slug}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <ProductsContainer vertical>
                {products.map(
                  (product) =>
                    product.category === paramCat && (
                      <div key={product._id}>
                        <AdminBar {...product} />
                        <ProductItem {...product} key={product._id}>
                          {/* <CustomButton
                            type="button"
                            onClick={() => dispatch(selectProduct(product))}
                          >
                            Voir plus
                          </CustomButton> */}
                        </ProductItem>
                      </div>
                    )
                )}
              </ProductsContainer>
            </div>
          )
      )}
    </main>
  );
};

export default ProductsPage;
