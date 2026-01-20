import { useState } from "react";
import styles from "./TableHeader.module.css";
import { columns } from "../../../config/TableHeaderData";
import { HiOutlineArrowSmUp, HiOutlineArrowSmDown } from "react-icons/hi";

export default function TableHeader() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  const onSort = (col: string) => {
    if (sortColumn === col) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setDirection("asc");
    }
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => {
          const isActive = sortColumn === col;
          const isAsc = isActive && direction === "asc";
          return (
            <th key={col} onClick={() => onSort(col)}>
              <span className={styles.title}>{col}</span>
              <span
                className={styles.sortItem}
                style={{
                  marginLeft: 6,
                  color: isActive ? "#FF4D00" : "gray",
                }}
              >
                {isAsc ? <HiOutlineArrowSmUp size={17} /> : <HiOutlineArrowSmDown size={17} />}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}