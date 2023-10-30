import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

function ProductsCategories() {
  const [productCategories, setProductCategories] = useState([]);
  const [showModel, setShowModel] = useState(true);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  const deleteHandler = (e) => {
    var obj = JSON.parse(localStorage.getItem("productsPage"));
    var categoryData = obj["categories"];
    categoryData.splice(categoryData.indexOf(e.target.id), 1);
    obj = {
      ...obj,
      categories: categoryData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  };
  const newCategoryHandler = (e) => {
    setNewCategory(e.target.value);
  };
  const addCategoryHandler = () => {
    var obj = JSON.parse(localStorage.getItem("productsPage"));
    var categoryData = obj["categories"];
    categoryData.push(newCategory);
    obj = {
      ...obj,
      categories: categoryData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setNewCategory("");
    setShowModel(true);
  };
  const showModalHandler = () => {
    setShowModel(false);
    console.log(showModel);
  };
  return (
    <div>
      {showModel ? (
        <div className={styles.outerCategory}>
          <h3> Product Category</h3>
          <div className={styles.innerCategory}>
            <table>
              {productCategories.map((item, i) => {
                return (
                  <td>
                    {" "}
                    {item}
                    <span>
                      <i
                        class="fa-solid fa-trash-can"
                        id={item}
                        onClick={deleteHandler}
                      ></i>
                    </span>
                  </td>
                );
              })}
            </table>
          </div>
          <button className={styles.btn} onClick={showModalHandler}>
            ADD NEW CATEGORY
          </button>
        </div>
      ) : (
        <div className={styles.outerCategory}>
          <h3> Product Category</h3>
          <div className={styles.innerCategory}>
            <label> Category Name </label>
            <input
              type="text"
              value={newCategory}
              onChange={newCategoryHandler}
            />
            <button className={styles.btn} onClick={addCategoryHandler}>
              Add Category
            </button>
            <button
              className={styles.btn}
              onClick={() => {
                setShowModel(true);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsCategories;
