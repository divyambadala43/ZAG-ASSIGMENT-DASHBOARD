import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageChange,
  indexOfFirstItem,
  indexOfLastItem,
  totalEntries,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.heading}>
        Showing data {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
        {totalEntries} entries
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? styles.activePageButton
                : styles.pageButton
            }
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
