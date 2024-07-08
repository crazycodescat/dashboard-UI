/* eslint-disable react/prop-types */
const Select = ({ id, classes, children, frequency, handleChange }) => {
  console.log(frequency)
  return (
    <select
      value={frequency}
      onChange={(e) => handleChange(e)}
      id={id}
      className={classes}
    >
      {children}
    </select>
  );
};

export default Select;
