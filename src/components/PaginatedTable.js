import React, { useState, useMemo } from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import styles from "../styles/PaginatedTable.module.css";

const PaginatedTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <div
            className={`${styles.status} ${
              value === "Active" ? styles.active : styles.inActive
            }`}>
            {value}
          </div>
        ),
      },
    ],
    []
  );

  const [filter, setFilter] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("customerName");
  const [sortedData, setSortedData] = useState(data);

  useMemo(() => {
    const sorted = [...data].sort((a, b) =>
      a[selectedFilter].localeCompare(b[selectedFilter])
    );
    setSortedData(sorted);
  }, [data, selectedFilter]);

  const filteredData = useMemo(() => {
    let filtered = sortedData;
    if (filter.length > 0) {
      filtered = sortedData.filter((item) =>
        filter.every((filterValue) =>
          item[filterValue.id]
            .toLowerCase()
            .includes(filterValue.value.toLowerCase())
        )
      );
    }
    return filtered;
  }, [sortedData, filter]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage, // Added for custom page navigation
    pageCount, // Added for total page count
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.searchAndSortContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder={`Filter ${selectedFilter}`}
          onChange={(e) =>
            setFilter([{ id: selectedFilter, value: e.target.value }])
          }
        />
        <select
          className={styles.sortDropdown}
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}>
          {columns.map((column) => (
            <option key={column.accessor} value={column.accessor}>
              {column.Header}
            </option>
          ))}
        </select>
      </div>

      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          {pageOptions.map((page, index) => (
            <button
              className={
                pageIndex === index
                  ? styles.activePageButton
                  : styles.pageButton
              }
              key={index}
              onClick={() => gotoPage(index)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginatedTable;
