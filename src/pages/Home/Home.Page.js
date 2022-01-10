import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const HomePage = () => {
  return (
    <main>
      {categories.map((category) => (
        <>
          <h2>{category.name}</h2>
          {products.map(
            (product) =>
              product.category === category.slug && <ProductItem {...product} />
          )}
        </>
      ))}
    </main>
  );
};

export default HomePage;
