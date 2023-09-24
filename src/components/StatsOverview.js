import React from "react";
import chart2 from "../assets/chart2.png";
import styles from "../styles/StatsOverview.module.css";

const StatsOverview = () => {
  return (
    <div className={styles.statsOverviewConatiner}>
      <div className={styles.heading}>All Customers</div>
      <div className={styles.statsContainer}>
        <div className={styles.statHeading}>Active</div>
        <div className={styles.stats}>
          <img src={chart2} alt="" />
        </div>
        <div className={styles.statPercentage}>60%</div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statHeading}>Inactive</div>
        <div className={styles.stats}>
          <img src={chart2} alt="" />
        </div>
        <div className={styles.statPercentage}>40%</div>
      </div>
    </div>
  );
};

export default StatsOverview;
