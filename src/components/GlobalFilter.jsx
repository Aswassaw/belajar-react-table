import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <label className='form-label' htmlFor='globalSearch'>
        Search For All Column
      </label>
      <input
        id='globalSearch'
        type='text'
        value={filter || ""}
        className='form-input'
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
