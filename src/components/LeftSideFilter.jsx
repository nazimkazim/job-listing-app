import React from "react";
import "./leftSideFilter.css";

const LeftSideFilter = ({ sideFilters, setFilters, filters }) => {
  const addFilters = (item) => {
    if (filters.includes(item)) {
      const newFilters = filters.filter((filter) => filter !== item);
      console.log(newFilters);
      setFilters(newFilters);
    } else {
      const newArr = [...filters, item];
      setFilters(newArr);
    }
  };
  return (
    <div className="filter-buttons">
      {sideFilters.map((item) => (
        <button
          onClick={() => addFilters(item)}
          className={
            !filters.includes(item)
              ? `filter-buttons-button`
              : `filter-buttons-button active`
          }
        >
          {" "}
          {item}{" "}
        </button>
      ))}
    </div>
  );
};

export default LeftSideFilter;
