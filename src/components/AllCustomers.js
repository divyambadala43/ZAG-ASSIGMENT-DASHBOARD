import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import progressData from "../progressData.json";
import styles from "../styles/AllCustomers.module.css";
import RoundChartConatiner from "./RoundChartConatiner";

const AllCustomers = () => {
  return (
    <div className={styles.allCustomersContainer}>
      <div className={styles.heading}>All Customers</div>
      <div className={styles.chartsContainer}>
        {progressData.map((data) => {
          return (
            <RoundChartConatiner
              color={data.color}
              label={data.label}
              percentage={data.percentage}
            />
          );
        })}
        
      </div>
    </div>
  );
};

export default AllCustomers;
