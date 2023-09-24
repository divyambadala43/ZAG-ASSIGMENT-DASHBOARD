import React from "react";
import styles from "../styles/Table.module.css";

const Sort = ({ sortOption, handleSortChange }) => {
  return (
    <div className={styles.sortDropdown}>
      <select value={sortOption} onChange={handleSortChange}>
        <option className={styles.option} value="">
          Sort by
        </option>
        <option className={styles.option} value="customerName">
          Customer Name
        </option>
        <option className={styles.option} value="company">
          Company
        </option>
        <option className={styles.option} value="phoneNumber">
          Phone Number
        </option>
        <option className={styles.option} value="email">
          Email
        </option>
        <option className={styles.option} value="country">
          Country
        </option>
        <option className={styles.option} value="status">
          Status
        </option>
      </select>
    </div>
  );
};

export default Sort;
