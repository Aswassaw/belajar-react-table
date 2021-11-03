import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <span>
      <input
        type='text'
        value={filterValue || ""}
        className='form-input'
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
