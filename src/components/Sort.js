import React from "react";
import styles from "../styles/Table.module.css";

const Sort = ({ sortOption, handleSortChange }) => {
  return (
    <div className={styles.sortDropdown}>
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
        <option value="customerName">Customer Name</option>
        <option value="company">Company</option>
        <option value="phoneNumber">Phone Number</option>
        <option value="email">Email</option>
        <option value="country">Country</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
};

export default Sort;
