/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5';

const EmailChips = ({
  containerClassess,
  contentClassess,
  iconClassess,
  text,
  closeBtnClassess,
  deleteEmail,
  index,
}) => {
  return (
    <span className={containerClassess}>
      <p className={contentClassess}>{text}</p>
      <button onClick={() => deleteEmail(index)} className={closeBtnClassess}>
        <IoClose fontSize={12} className={iconClassess} />
      </button>
    </span>
  );
};

export default EmailChips;
