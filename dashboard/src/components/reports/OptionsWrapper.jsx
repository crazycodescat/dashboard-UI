/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const OptionsWrapper = ({ children, wrapperName }) => {
  const [optionsOpen, setOptionsOpen] = useState(true);
  const optionsToggler = () => {
    setOptionsOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-end">
      <div className="flex flex-col gap-4 w-[387px]">
        <div className="flex gap-4 justify-end">
          <h2 className="text-lg font-semibold uppercase w-fit">
            {wrapperName}
          </h2>
          <div
            className="flex items-center justify-center bg-primary05 p-1 cursor-pointer"
            onClick={optionsToggler}
          >
            <HiChevronDown
              className={`duration-300 ${
                optionsOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>
        {optionsOpen && children}
      </div>
    </div>
  );
};

export default OptionsWrapper;
