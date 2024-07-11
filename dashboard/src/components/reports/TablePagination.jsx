/* eslint-disable react/prop-types */
const TablePagination = ({ children }) => {
  return (
    <div className="w-96 mx-auto h-12 flex justify-center gap-4 items-center mt-auto">
      {children}
    </div>
  );
};

export default TablePagination;
