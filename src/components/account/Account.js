import React, { useState, useEffect } from "react";
import AccountData from "../account/AccountData";
import AccountList from "../account/AccountList";
import styles from "./Account.module.css";

function Account() {
  const [accountData, setAccountData] = useState([]);
  const [user, setUser] = useState("");
  console.log(user);
  useEffect(() => {
    setAccountData(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  return (
    <div className={styles.accountContainer}>
      <AccountList accountData={accountData} user={setUser} />
      <br />
      <AccountData activeUser={user} />
    </div>
  );
}
export default Account;
