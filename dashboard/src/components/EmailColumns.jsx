/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const EmailColumns = ({ updatedCols, setUpdatedCols }) => {
  console.log(updatedCols);
  const [mappedColumns, setMappedColumns] = useState(updatedCols);
  console.log(mappedColumns);

  const handleColumnsSelection = (idx) => {
    setMappedColumns((prevMappedColumns) => {
      const updatedColumns = [...prevMappedColumns]; // Create a copy of the array
      updatedColumns[idx] = {
        ...updatedColumns[idx],
        isTrue: !updatedColumns[idx].isTrue,
      }; // Update the specific column's isTrue property
      return updatedColumns; // Return the updated array
    });
  };
  
  useEffect(() => {
    setMappedColumns(updatedCols);
  }, [updatedCols]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {mappedColumns.length > 0 &&
        mappedColumns.map((colName, idx) => {
          console.log(colName.isTrue);
          return (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border border-[#bbb]"
                onChange={() => handleColumnsSelection(idx)}
                checked={colName.isTrue}
              />
              <p className="text-[10px] font-normal">{colName.header}</p>
            </div>
          );
        })}
    </div>
  );
};

export default EmailColumns;
