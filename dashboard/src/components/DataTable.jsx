import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import TablePagination from '../components/reports/TablePagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

/* eslint-disable react/prop-types */
const DataTable = ({
  columns,
  data,
  loading,
  setCurrentPage,
  paginationLink,
  currentPage,
}) => {
  const [toolTipIndex, setToolTipIndex] = useState();
  const [toolTipData, setToolTipData] = useState([]);
  // console.log(data && data);
  // Function to handle next page click
  const nextPageHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page click
  const prevPageHandler = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to navigate to last page
  const lastPageHandler = () => {
    setCurrentPage(paginationLink.last_page);
  };

  const toolTipInitializer = (rowIndex) => {
    const stock = data[rowIndex].stock;
    const locationName = stock.map((stock) => {
      return stock.locationName;
    });
    setToolTipIndex(rowIndex);
    setToolTipData(locationName);
  };

  const removeToolTipHandler = () => {
    setToolTipIndex('');
    setToolTipData([]);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full ">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="overflow-y-auto max-h-[500px] min-h-[500px]">
            <table id="dataTable" className="w-full">
              <thead className=" sticky top-0 z-10">
                <tr className="bg-gray-100">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="min-w-fit px-6 py-3 text-center text-xs font-semibold text-gray-700 border border-solid border-gray-300"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="relative px-2  text-start py-2 text-xs text-gray-700 border border-solid border-gray-300"
                      >
                        {column.accessor === 'image_url' ? (
                          <Link
                            target="_blank"
                            // rel="noopener noreferrer"
                            to={row[column.accessor]}
                            className=""
                          >
                            <img
                              className="w-12"
                              src={row[column.accessor]}
                              alt=""
                            />
                          </Link>
                        ) : column.accessor === 'category' ? (
                          row[column.accessor].name
                        ) : column.accessor === 'stock' ? (
                          row[column.accessor] === 'No Stock' ? (
                            <p className="text-black">{row[column.accessor]}</p>
                          ) : (
                            <div
                              onMouseEnter={() => toolTipInitializer(rowIndex)}
                              onMouseLeave={removeToolTipHandler}
                              className="flex flex-col items-center text-white relative"
                            >
                              {row[column.accessor] === 'No Stock' ? (
                                <p className="text-black">
                                  {row[column.accessor]}
                                </p>
                              ) : (
                                row[column.accessor].map((stock, i) => (
                                  <>
                                    <p
                                      className={`${
                                        i % 2 === 0
                                          ? 'bg-purple-600'
                                          : 'bg-orange-600'
                                      } p-1 uppercase text-center w-full`}
                                      key={uuidv4()}
                                    >
                                      {stock.stockWithName}
                                    </p>
                                  </>
                                ))
                              )}
                              {toolTipIndex === rowIndex && (
                                <ul className="flex flex-wrap divide-y divide-white justify-center gap-2 p-1 absolute top-0 left-[68px] bg-neutral-800 min-h-full min-w-[150px] z-10 ">
                                  {toolTipData.map((locationName) => {
                                    return (
                                      <li
                                        className="text-white w-fit"
                                        key={uuidv4()}
                                      >
                                        {locationName}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          )
                        ) : (
                          row[column.accessor]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <TablePagination>
            {/* Button for previous page */}
            <button
              onClick={prevPageHandler}
              className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
              disabled={!paginationLink.prev}
            >
              <FaChevronLeft />
              <p>Previous</p>
            </button>
            <div className="flex gap-4">
              {/* Button to navigate to first page */}
              <button
                onClick={() => setCurrentPage(1)}
                className={`${
                  currentPage <= 1 ? 'hidden' : null
                } w-fit h-fit p-1 rounded-full text-white`}
              >
                1
              </button>
              {/* Button to navigate to previous page */}
              <button
                onClick={() =>
                  setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
                }
                className={` ${
                  currentPage <= 1 ? 'hidden' : null
                } w-fit h-fit p-1 rounded-full text-white`}
              >
                {currentPage - 1}
              </button>
              {/* Button to display current page */}
              <button className="bg-white w-fit h-fit p-1 rounded-full text-black">
                {currentPage}
              </button>
              <p
                className={`${
                  paginationLink.last_page === currentPage ? 'hidden' : null
                }`}
              >
                ...
              </p>
              {/* Button to navigate to last page */}
              <button
                className={`${
                  paginationLink.last_page === currentPage ? 'hidden' : ''
                }`}
                onClick={lastPageHandler}
              >
                {paginationLink.last_page}
              </button>
            </div>
            {/* Button for next page */}
            <button
              onClick={nextPageHandler}
              className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
              disabled={paginationLink.last_page === currentPage}
            >
              <p>Next</p>
              <FaChevronRight />
            </button>
          </TablePagination>
        </div>
      )}
    </>
  );
};

export default DataTable;
