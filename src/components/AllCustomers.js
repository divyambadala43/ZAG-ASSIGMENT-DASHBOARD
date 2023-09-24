import React from "react";
import styles from "../styles/AllCustomers.module.css";
import chart1 from "../assets/chart 1.png";

const AllCustomers = () => {
  return (
    <div className={styles.allCustomersContainer}>
      <div className={styles.heading}>All Customers</div>
      <div className={styles.chartsContainer}>
        <div className={styles.chartContainer}>
          <div className={styles.chart}>
            <img src={chart1} alt="" />
          </div>
          <div className={styles.chartTitle}>Current Customers</div>
        </div>
        <div className={styles.chart}>
          <div>
            <img src={chart1} alt="" />
          </div>
          <div className={styles.chartTitle}>New Customers</div>
        </div>
        <div className={styles.chart}>
          <div>
            <img src={chart1} alt="" />
          </div>
          <div className={styles.chartTitle}>Target Customers</div>
        </div>
        <div className={styles.chart}>
          <div>
            <img src={chart1} alt="" />
          </div>
          <div className={styles.chartTitle}>Retarget Customers</div>
        </div>
      </div>
    </div>
  );
};

export default AllCustomers;
