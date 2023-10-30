import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";

function ProductsList(props) {
  const [productList, setProductList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stocks, setStocks] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [unitSold, setUnitSold] = useState("");

  useEffect(() => {
    setProductList(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, []);

  const deleteHandler = (e) => {
    var obj = JSON.parse(localStorage.getItem("productsPage"));
    var listData = obj["products"];
    var listAfterDelete = listData.filter((item) => item.name !== e.target.id);
    obj = {
      ...obj,
      products: listAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductList(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const checkboxHandler = (e) => {
    console.log(e.target.id);
    if (e.target.checked) {
      setSelected([...selected, e.target.id]);
    } else {
      selected.splice(selected.indexOf(e.target.id), 1);
      setSelected(selected);
    }
  };

  const selectedDeleteHandler = () => {
    let checkboxAfterDelete = productList.filter(
      (item) => !selected.includes(item.name)
    );

    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      products: checkboxAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductList(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );

    let selectedall = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < selectedall.length; i++) {
      selectedall[i].checked = false;
    }
  };
  console.log(showModel);
  const addNewProductHandler = () => {
    props.hideCategory(false);
    setShowModel(false);
    console.log(showModel);
  };

  const addProductHandler = () => {
    if (
      name === "" ||
      category === "" ||
      description === "" ||
      stocks === "" ||
      expireDate === "" ||
      unitSold === ""
    ) {
      alert("Please Enter all details of Product");
      return;
    }
    var obj = JSON.parse(localStorage.getItem("productsPage"));
    obj.products.push({
      name: name,
      description: description,
      expireDate: expireDate,
      stock: stocks,
      unitSold: unitSold,
      category: category,
    });
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductList(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    setShowModel(true);
    props.hideCategory(true);
  };

  return (
    <>
      {showModel ? (
        <div className={styles.outerList}>
          <div className={styles.productList}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Units Sold</th>
                  <th>In Stock</th>
                  <th>Expire Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <label>
                          <input
                            type="checkbox"
                            id={item.name}
                            onChange={checkboxHandler}
                          />
                        </label>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.unitSold}</td>
                      <td>{item.stock}</td>
                      <td>{item.expireDate}</td>
                      <td id={item.name}>
                        <i
                          class="fa-solid fa-trash-can"
                          id={item.name}
                          onClick={deleteHandler}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className={styles.btn} onClick={addNewProductHandler}>
            ADD NEW PRODUCT
          </button>
          <button className={styles.btn} onClick={selectedDeleteHandler}>
            DELETE SELECTED PRODUCTS
          </button>
        </div>
      ) : (
        <div className={styles.addProductPage}>
          <h2>Add Product</h2>
          <form>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <label>Description</label>
            <br />
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <br />
            <label>Category</label>
            <br />
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Seletc Category</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Trending">Trending</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Festival Special">Festival Special</option>
            </select>
            <br />
            <label>Stocks</label>
            <br />
            <input
              type="text"
              value={stocks}
              onChange={(e) => {
                setStocks(e.target.value);
              }}
            />
            <br />
            <div className={styles.sideBySide}>
              <div>
                <label>Expire Date</label>
                <br />
                <input
                  type="date"
                  value={expireDate}
                  onChange={(e) => {
                    setExpireDate(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Units Sold</label>
                <br />
                <input
                  type="text"
                  value={unitSold}
                  onChange={(e) => {
                    setUnitSold(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <button className={styles.btn} onClick={addProductHandler}>
            Add Product
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setShowModel(true);
              props.hideCategory(true);
            }}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      )}
    </>
  );
}

export default ProductsList;
