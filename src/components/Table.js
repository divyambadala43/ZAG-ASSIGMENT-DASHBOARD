import React, { useState, useEffect } from "react";
import data from "../data.json";
import styles from "../styles/Table.module.css";
import Sort from "./Sort";
import Search from "./Search";
import Pagination from "./Pagination";

const Table = () => {
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [filteredData, setFilteredData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    // Sort the filtered data based on the sorting option
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOption) {
        if (a[sortOption] < b[sortOption]) return -1;
        if (a[sortOption] > b[sortOption]) return 1;
      }
      return 0;
    });

    setPaginationData(sortedData);
  }, [sortOption, filteredData]);

  useEffect(() => {
    // Filter the data based on the search term
    const filteredData = data.filter((info) => {
      const searchString =
        `${info.customerName} ${info.company} ${info.phoneNumber} ${info.email} ${info.country} ${info.status}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });

    setFilteredData(filteredData);
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalEntries = paginationData.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paginationData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.searchSortContainer}>
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
                <td className={styles.columnData}>{info.customerName}</td>
                <td className={styles.columnData}>{info.company}</td>
                <td className={styles.columnData}>{info.phoneNumber}</td>
                <td className={styles.columnData}>{info.email}</td>
                <td className={styles.columnData}>{info.country}</td>
                <td className={styles.columnData}>
                  {info.status === "Active" ? (
                    <div className={styles.active}>Active</div>
                  ) : (
                    <div className={styles.inActive}>Inactive</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredData.length > itemsPerPage && (
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          totalEntries={totalEntries}
        />
      )}
    </div>
  );
};

export default Table;
