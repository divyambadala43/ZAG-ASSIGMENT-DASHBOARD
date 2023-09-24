import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../styles/StatsOverview.module.css";
import data from "../data.json";

const StatsOverview = () => {
  console.log(data);
  const totalCustomers = data.length;
  console.log(totalCustomers);
  const activeCustomers = data.filter(
    (customer) => customer.status === "Active"
  ).length;
  console.log(activeCustomers);
  const inactiveCustomers = data.filter(
    (customer) => customer.status === "Inactive"
  ).length;
  console.log(inactiveCustomers);

  const activePercentage = (activeCustomers / totalCustomers) * 100;
  console.log(activePercentage);
  const inactivePercentage = (inactiveCustomers / totalCustomers) * 100;
  console.log(inactivePercentage);
  return (
    <div className={styles.statsOverviewConatiner}>
      <div className={styles.heading}>All Customers</div>
      <div className={styles.statsContainer}>
        <div className={styles.statHeading}>Active</div>
        <div className={styles.stats}>
          <ProgressBar
            bgColor="#16c098"
            baseBgColor="#EEE"
            width="301px"
            height="8px"
            isLabelVisible={false}
            completed={activePercentage}
          />
        </div>
        <div className={styles.statPercentage}>{activePercentage}%</div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statHeading}>Inactive</div>
        <div className={styles.stats}>
          <ProgressBar
            bgColor="#FF6B6B"
            baseBgColor="#EEE"
            width="301px"
            height="8px"
            isLabelVisible={false}
            completed={inactivePercentage}
          />
        </div>
        <div className={styles.statPercentage}>{inactivePercentage}%</div>
      </div>
    </div>
  );
};

export default StatsOverview;
