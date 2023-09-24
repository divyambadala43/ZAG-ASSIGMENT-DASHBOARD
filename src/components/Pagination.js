import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ index, handlePageChange, currentPage }) => {
  return (
    <button
      key={index}
      className={
        currentPage === index + 1 ? styles.activePageButton : styles.pageButton
      }
      onClick={() => handlePageChange(index + 1)}>
      {index + 1}
    </button>
  );
};

export default Pagination;
