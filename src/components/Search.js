import React from "react";
import styles from "../styles/Table.module.css";

const Search = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className={styles.searchInput}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 25 25"
        fill="none">
        <path
          d="M11.4667 19.564C16.0219 19.564 19.7146 15.9046 19.7146 11.3905C19.7146 6.87634 16.0219 3.21692 11.4667 3.21692C6.91148 3.21692 3.21875 6.87634 3.21875 11.3905C3.21875 15.9046 6.91148 19.564 11.4667 19.564Z"
          stroke="#7E7E7E"
          stroke-width="2.04339"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.7768 21.6074L17.292 17.1631"
          stroke="#7E7E7E"
          stroke-width="2.04339"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
