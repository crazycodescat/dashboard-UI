/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const EmailColumns = ({ columns, showColumn }) => {
  const [mappedColumns, setMappedColumns] = useState(columns);

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

  // const handleColumnsSelection = (idx) => {
  //   console.log('hello');
  //   setMappedColumns(
  //     (prevMappedColumns) =>
  //       (prevMappedColumns[idx].isTrue = !prevMappedColumns[idx].isTrue)
  //   );
  // };

  // console.log(localColumns);

  return (
    <div className="grid grid-cols-3 gap-2">
      {mappedColumns.length > 0 &&
        mappedColumns.map((colName, idx) => {
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
