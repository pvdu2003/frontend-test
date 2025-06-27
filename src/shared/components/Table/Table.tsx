import styles from "./Table.module.css";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

function Table<T extends object>({ columns, data }: TableProps<T>) {
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
                {col.key === "actions" ? (
                  <div className={styles.actions}>
                    {col.onEdit && (
                      <img
                        src="./images/edit.png"
                        alt="Edit"
                        className={styles.actionIcon}
                        title="Edit"
                        onClick={() => col.onEdit?.(row)}
                      />
                    )}
                    {col.onDelete && (
                      <img
                        src="./images/delete.png"
                        alt="Delete"
                        className={styles.actionIcon}
                        title="Delete"
                        onClick={() => col.onDelete?.(row)}
                      />
                    )}
                  </div>
                ) : col.render ? (
                  col.render(row)
                ) : typeof col.key === "string" ? (
                  String(row[col.key as keyof T])
                ) : (
                  ""
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
