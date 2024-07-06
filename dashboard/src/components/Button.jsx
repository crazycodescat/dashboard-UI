/* eslint-disable react/prop-types */
const Button = ({ classess, text }) => {
  return (
    <button className={classess} type="submit">
      {text}
    </button>
  );
};

export default Button;
