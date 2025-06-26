import React from "react";
import styles from "./Table.module.css";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length} className={styles.noData}>
              No data available
            </td>
          </tr>
        )}
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {columns.map((col, colIdx) => (
              <td key={colIdx}>
                {col.render
                  ? col.render(row)
                  : typeof col.key === "string"
                  ? String((row as T)[col.key as keyof T])
                  : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
