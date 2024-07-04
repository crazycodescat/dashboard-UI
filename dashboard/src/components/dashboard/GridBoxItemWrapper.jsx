/* eslint-disable react/prop-types */
const GridBoxItemWrapper = ({ children }) => {
  return (
    <div className="flex-1 justify-between flex flex-col border-r border-solid px-4">
      {children}
    </div>
  );
};
export default GridBoxItemWrapper;
