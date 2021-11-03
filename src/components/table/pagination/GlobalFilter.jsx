import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 600);

  return (
    <span>
      <label className='form-label' htmlFor='globalSearch'>
        Search For All Column
      </label>
      <input
        id='globalSearch'
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
