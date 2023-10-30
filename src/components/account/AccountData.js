import React, { useState, useEffect } from "react";
import styles from "./Account.module.css";

function AccountData(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [pic, setPic] = useState("");
  const [update, setUpdate] = useState(false);
  const [model, setModel] = useState(false);
  const [obj, setObj] = useState({});
  let activeUser = props;

  var localData = JSON.parse(localStorage.getItem("accountsPage"));
  var selectedData = localData[`${props.activeUser}`];
  useEffect(() => {
    if (update) {
      let obj1 = JSON.parse(localStorage.getItem("accountsPage"));

      obj1 = {
        ...obj1,
        [`${JSON.stringify(activeUser).slice(
          15,
          JSON.stringify(activeUser).length - 2
        )}`]: obj,
      };
      console.log(obj1);
      localStorage.setItem("accountsPage", JSON.stringify(obj1));
    }
    setName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setPic("");
  }, [obj, update]);

  const updateProfileHandler = () => {
    setObj({
      email: email === "" ? localData[`${props.activeUser}`].email : email,
      name: name === "" ? localData[`${props.activeUser}`].name : name,
      password:
        password === "" ? localData[`${props.activeUser}`].password : password,
      phone: phone === "" ? localData[`${props.activeUser}`].phone : phone,
      profilePic:
        pic === "" ? localData[`${props.activeUser}`].profilePic : pic,
    });
    setUpdate(true);
    setModel(true);
  };
  return (
    <div className={styles.accDataContainer}>
      <div className={styles.accDataImgOuterDiv}>
        <div className={styles.accDataImgInnerDiv}>
          <img
            src={
              pic.length > 0
                ? pic
                : selectedData !== undefined
                ? selectedData.profilePic
                : ""
            }
          />
          <button className={styles.btn}> Upload a New Photo </button>
        </div>
      </div>
      <div className={styles.accDataOuter}>
        <div className={styles.accDataInner}>
          <h2>Account Settings</h2>
          <div className={styles.accDataSmallOuterDiv}>
            <div className={styles.accDataSmallInnerDiv}>
              <label>Account Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={
                  name.length > 0
                    ? name
                    : selectedData !== undefined
                    ? selectedData.name
                    : ""
                }
              />
            </div>
            <div className={styles.accDataSmallInnerDiv}>
              <label>Account Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={
                  email.length > 0
                    ? email
                    : selectedData !== undefined
                    ? selectedData.email
                    : ""
                }
              />
            </div>
          </div>
          <div className={styles.accDataSmallOuterDiv}>
            <div className={styles.accDataSmallInnerDiv}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={
                  password.length > 0
                    ? password
                    : selectedData !== undefined
                    ? selectedData.password
                    : ""
                }
              />
            </div>
            <div className={styles.accDataSmallInnerDiv}>
              <label>Re-Enter Password</label>
              <input
                type="password"
                onChange={(e) => setRePassword(e.target.value)}
                value={
                  rePassword.length > 0
                    ? rePassword
                    : selectedData !== undefined
                    ? selectedData.password
                    : ""
                }
              />
            </div>
          </div>
          <div className={styles.accDataSmallOuterDiv}>
            <div className={styles.accDataSmallInnerDiv}>
              <label>Phone No</label>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={
                  phone.length > 0
                    ? phone
                    : selectedData !== undefined
                    ? selectedData.phone
                    : ""
                }
              />
            </div>
            <div className={styles.accDataSmallInnerDiv}>
              <button className={styles.btn} onClick={updateProfileHandler}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {model && (
        <div className={styles.modalouter}>
          <div className={styles.modal}>
            <i className="fa fa-close" onClick={() => setModel(false)}></i>
            <h1>Profile Updated</h1>
          </div>
        </div>
      )}
    </div>
  );
}
export default AccountData;
