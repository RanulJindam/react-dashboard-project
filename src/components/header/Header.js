import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  var location = useLocation();
  var path = location.pathname.split("/");
  return (
    <div>
      <header className={styles.header}>
        <h2>
          <Link to="/">Admin</Link>
        </h2>
        <nav>
          <ul>
            <li className={path[1] == "dashboard" ? styles.active : ""}>
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/dashboard"
                    : "/"
                }
              >
                <i class="fa-solid fa-chart-line"></i>
                <br />
                Dashboard
              </Link>
            </li>
            <li className={path[1] == "products" ? styles.active : ""}>
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/products"
                    : "/"
                }
              >
                <i class="fa-solid fa-cart-shopping"></i>
                <br />
                Products
              </Link>
            </li>
            <li className={path[1] == "account" ? styles.active : ""}>
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/account"
                    : "/"
                }
              >
                <i class="fa-solid fa-user"></i>
                <br />
                Account
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.logout}
          onClick={() => {
            localStorage.clear();
          }}
        >
          <Link to="/">
            admin,<b>Logout</b>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
