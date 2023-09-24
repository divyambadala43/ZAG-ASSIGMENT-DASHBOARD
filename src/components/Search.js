import React from "react";
import styles from "../styles/Table.module.css";

const Search = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
