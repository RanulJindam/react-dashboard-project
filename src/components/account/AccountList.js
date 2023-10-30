import React from "react";
import styles from "./Account.module.css";

function AccountList(props) {
  var data = Object.keys(props.accountData);

  return (
    <div className={styles.accList}>
      <h2>List of Accounts</h2>
      <label>Accounts</label>
      <br />
      <select
        onChange={(e) => {
          props.user(e.target.value);
        }}
      >
        <option value="">Select Account</option>
        {data.map((item, i) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
export default AccountList;
