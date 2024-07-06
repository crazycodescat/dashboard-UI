import { useState } from 'react';

const Switch = () => {
  const [isSwitch, setIsSwitch] = useState(false);

  const switchHandler = () => {
    setIsSwitch((prev) => !prev);
  };

  return (
    <button
      onClick={switchHandler}
      className={`relative flex items-center w-[30px] h-[18px] ${
        !isSwitch ? 'bg-[#8D8D8D] justify-start' : 'bg-[#7B7FC0] justify-end'
      }  rounded-full`}
    >
      <div
        className={`absolute ${
          !isSwitch ? 'bg-[#545454] justify-start' : 'bg-button justify-end'
        } w-[18px] h-[18px] rounded-full duration-300`}
      ></div>
    </button>
  );
};

export default Switch;
