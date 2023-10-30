import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const errMsg = <p>Enter correct Username / Password </p>;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
        );
        localStorage.setItem(
          "accountsPage",
          JSON.stringify(response.data.accountsPage)
        );
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(response.data.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(response.data.productsPage)
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  });
  const usernameHandler = (e) => {
    setUserName(e.target.value);
    setShow(false);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setShow(false);
  };
  const loginHandler = () => {
    if (userName === password && userName !== "" && password !== "") {
      localStorage.setItem("loginStatus", true);
      alert("Login Successfully ");
      navigate("/dashboard");
    } else {
      setShow(true);
    }
  };
  return (
    <div className={styles.loginbody}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Welcome to Dashboard !</h2>
        <label> Username </label>
        <input type="text" value={userName} onChange={usernameHandler} />
        <label> Password </label>
        <input type="passwoed" value={password} onChange={passwordHandler} />
        {show ? errMsg : ""}
        <button className={styles.btn} onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
