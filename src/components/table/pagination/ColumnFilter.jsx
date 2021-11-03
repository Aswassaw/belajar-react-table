import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  const [value, setValue] = useState(filterValue);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 600);

  return (
    <span>
      <input
        type='text'
        value={value || ""}
        className='form-input'
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value.trim());
        }}
      />
    </span>
  );
};
