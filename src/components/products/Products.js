import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductsCategory from "./ProductsCategories";
import ProductList from "./ProductsList";

function Products() {
  const [catogories, setCatogories] = useState(true);
  return (
    <div className={styles.container}>
      <ProductList hideCategory={setCatogories} />
      {catogories ? <ProductsCategory /> : ""}
    </div>
  );
}
export default Products;
