import React from "react";
import data from "../data.json";

const Table = () => {
  const tableData = data.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.customerName}</td>
        <td>{info.company}</td>
        <td>{info.phoneNumber}</td>
        <td>{info.email}</td>
        <td>{info.country}</td>
        <td>{info.status}</td>
      </tr>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
