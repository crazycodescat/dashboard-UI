/* eslint-disable react/prop-types */
const Select = ({ id, classes, children }) => {
  return (
    <select id={id} className={classes}>
      {children}
    </select>
  );
};

export default Select;
