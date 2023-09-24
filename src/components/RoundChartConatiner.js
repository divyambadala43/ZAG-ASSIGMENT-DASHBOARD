import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../styles/AllCustomers.module.css";

const RoundChartConatiner = ({ color, label, percentage }) => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: color,
            textColor: color,
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
      <div className={styles.chartTitle}>{label}</div>
    </div>
  );
};

export default RoundChartConatiner;
