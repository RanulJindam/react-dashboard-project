import React, { useState } from "react";
import Orders from "./Orders";
import Notification from "./Notification";
import styles from "./Dashboard.module.css";
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";
import HorizontalChart from "./charts/HorizontalChart";

const Dashboard = () => {
  let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
    "storage"
  ];
  console.log("hiii");
  const [userData, setUserData] = useState({
    labels: [
      `Available (${localPerformance.available}GB)`,
      `System (${localPerformance.system}GB)`,
      `Used (${localPerformance.used}GB)`,
    ],

    datasets: [
      {
        data: [
          localPerformance.available,
          localPerformance.system,
          localPerformance.used,
        ],

        backgroundColor: ["#f7604c", "#a8d582", "#4ed6b8"],
        fontColor: "#fff",
      },
    ],
  });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.flexdiv}>
        <div className={styles.innerDiv}>
          <LineChart />
        </div>
        <div className={styles.innerDiv}>
          <HorizontalChart />
        </div>
      </div>

      <div className={styles.flexdiv}>
        <div className={styles.innerDiv}>
          <PieChart chartData={userData} />
        </div>
        <div className={styles.innerDiv}>
          <Notification />
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default Dashboard;
