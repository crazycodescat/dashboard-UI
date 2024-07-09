import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const DataTable = ({ columns, data }) => {
  console.log(data);
  return (
    <div className="overflow-y-auto h-[500px]">
      <table id="dataTable" className="w-full">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-xs font-semibold text-gray-700 border border-solid border-gray-300"
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
              className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-2 text-start py-2 text-xs text-gray-700 border border-solid border-gray-300 vertical-alignment:"

                >
                  {column.accessor === 'image_url' ? (
                    <Link to={row[column.accessor]} className="">
                      <img
                        className="inline-block w-8"
                        src={row[column.accessor]}
                        alt=""
                      />
                    </Link>
                  ) : column.accessor === 'category' ? (
                    row[column.accessor].name
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
  );
};

export default DataTable;
