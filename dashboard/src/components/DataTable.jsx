/* eslint-disable react/prop-types */
const DataTable = ({ columns, data }) => {
  console.log(data);
  return (
    <div className="overflow-x-auto data-table">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={index}
                className="border-b px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="border px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                  >
                    {column.image_url ? (
                      <img
                        className="w-1/4"
                        src={row[column.accessor]}
                        alt=""
                      />
                    ) : (
                      row[column.accessor]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
