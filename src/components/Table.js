import React, { useState } from "react";
import data from "../data.json";
import styles from "../styles/Table.module.css";
import Sort from "./Sort";
import Search from "./Search";
import Pagination from "./Pagination";

const Table = () => {
  const [sortOption, setSortOption] = useState("");
  const [tableData, setTableData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);

    const sortedData = [...tableData].sort((a, b) => {
      if (a[newSortOption] < b[newSortOption]) return -1;
      if (a[newSortOption] > b[newSortOption]) return 1;
      return 0;
    });

    setTableData(sortedData);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredData = data.filter((info) => {
      const searchString =
        `${info.customerName} ${info.company} ${info.phoneNumber} ${info.email} ${info.country} ${info.status}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });

    setTableData(filteredData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.searchSortConatiner}>
        <Search
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
      </div>
      <div className={styles.heading}>Active Members</div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th className={styles.columnHeading}>Customer Name</th>
              <th className={styles.columnHeading}>Company</th>
              <th className={styles.columnHeading}>Phone Number</th>
              <th className={styles.columnHeading}>Email</th>
              <th className={styles.columnHeading}>Country</th>
              <th className={styles.columnHeading}>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((info) => (
              <tr key={info.id}>
                <td style={{ marginLeft: "20px" }}>{info.customerName}</td>
                <td>{info.company}</td>
                <td>{info.phoneNumber}</td>
                <td>{info.email}</td>
                <td>{info.country}</td>
                <td>{info.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tableData.length > itemsPerPage && (
        <div className={styles.pagination}>
          {Array(Math.ceil(tableData.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <Pagination index={index} handlePageChange={handlePageChange} currentPage={currentPage} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Table;
