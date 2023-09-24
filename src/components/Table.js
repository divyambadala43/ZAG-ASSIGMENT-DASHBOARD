import React, { useState } from "react";
import data from "../data.json";
import styles from "../styles/Table.module.css";
import Sort from "./Sort";

const Table = () => {
  const [sortOption, setSortOption] = useState("customerName");
  const [tableData, setTableData] = useState(data);

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

  const tableRows = tableData.map((info) => (
    <tr key={info.id}>
      <td>{info.customerName}</td>
      <td>{info.company}</td>
      <td>{info.phoneNumber}</td>
      <td>{info.email}</td>
      <td>{info.country}</td>
      <td>{info.status}</td>
    </tr>
  ));

  return (
    <div className={styles.tableContainer}>
      <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
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
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
