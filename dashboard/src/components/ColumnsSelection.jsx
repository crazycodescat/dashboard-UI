/* eslint-disable react/prop-types */
import { useState } from 'react';

import EmailColumns from './EmailColumns';

const ColumnsSelection = ({ columns }) => {
  const [showColumn, setShowColumns] = useState(true);
  const [updatedCols, setUpdatedCols] = useState(columns);
  console.log(updatedCols);

  const colSelectionDeselection = () => {
    console.log(columns);

    // Implement logic to deselect all columns if checkbox is clicked.
    // Example:

    const updatedColumns = columns.map((column) => ({
      ...column,
      isTrue: !showColumn,
    }));

    setUpdatedCols(updatedColumns);
    setShowColumns(!showColumn);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-8 flex flex-col gap-2">
        <h2 className=" font-semibold">SELECT COLUMNS</h2>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={showColumn}
            onChange={colSelectionDeselection}
          />
          <p className="text-[10px] font-medium">
            {showColumn ? 'DESELECT ALL' : 'SELECT ALL'}
          </p>
        </div>
      </div>

      {/* COLUMNS */}
      <EmailColumns updatedCols={updatedCols} setUpdatedCols={setUpdatedCols} />
    </div>
  );
};

export default ColumnsSelection;
