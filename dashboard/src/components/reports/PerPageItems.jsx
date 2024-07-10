/* eslint-disable no-unused-vars */

import { useState } from 'react';

/* eslint-disable react/prop-types */
const PerPageItems = ({ perPage, setPerPage, paginationLink }) => {
  // setting items per page
  const setPerPageHandler = (e) => {
    e.preventDefault();

    const total = paginationLink.total;
    console.log(paginationLink);
    console.log(total);
    if (e.target.value == 'ALL') {
      setPerPage(3079);
      return;
    }
    setPerPage(e.target.value);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-sm font-light">Number of Items {perPage}</h1>
      <select
        onChange={setPerPageHandler}
        className="bg-gray-500 focus:outline-none p-2 rounded-md"
        name="itemsPerPage"
        id="items"
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="3079">All</option>
      </select>
    </div>
  );
};

export default PerPageItems;
