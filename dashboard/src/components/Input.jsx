/* eslint-disable react/prop-types */
import { useState } from 'react';

const Input = ({
  type,
  classess,
  name,
  id,
  placeholder,
  initialCheckBoxState,
  value,
}) => {
  const [checkboxState, setCheckboxState] = useState(initialCheckBoxState);
  const onChangeHandler = () => {
    setCheckboxState((prev) => !prev);
  };
  return (
    <>
      <input
        type={type}
        className={classess}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChangeHandler}
        checked={checkboxState}
        value={value}
      />
    </>
  );
};

export default Input;
