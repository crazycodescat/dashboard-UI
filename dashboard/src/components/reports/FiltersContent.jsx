/* eslint-disable react/prop-types */
const FiltersContent = ({ children }) => {
  return (
    <>
      <div className="rounded-md absolute top-9 w-full z-50">
        {children}
      </div>
    </>
  );
};

export default FiltersContent;
