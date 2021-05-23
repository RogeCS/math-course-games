import React from "react";
var Latex = require("react-latex");
import "../../assets/styles/components/course-preview/Table.scss";

const Table = ({ table }) => {
  return (
    <table className="flat-table">
      <tbody>
        <tr>
          {table.title.map((text, index) => (
            <th key={index}>
              <Latex>{text}</Latex>
            </th>
          ))}
        </tr>
        {table.content.map((row, index) => (
          <tr key={index}>
            {row.map((column, index) => (
              <td key={index}>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
