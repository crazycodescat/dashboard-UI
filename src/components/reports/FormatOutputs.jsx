import { useState } from 'react';
import OptionsWrapper from '../reports/OptionsWrapper';

const outputFormats = ['pdfs', 'csv', 'xlsx', 'json', 'print', 'email'];

const FormatOutputs = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (i) => {
    setActiveButton(i);
  };

  return (
    <>
      <OptionsWrapper wrapperName="format output">
        <div className="flex gap-2">
          {outputFormats.map((format, i) => {
            return (
              <button
                key={i}
                className={`
                  uppercase
                  rounded-md
                  font-normal
                  text-[10px]
                  p-2
                  bg-filtersHeader
                  hover:bg-primary03
                  ${activeButton === i ? 'border border-white' : ''}
                  w-fit
                `}
                onClick={() => handleButtonClick(i)}
              >
                {format}
              </button>
            );
          })}
        </div>
      </OptionsWrapper>
    </>
  );
};
export default FormatOutputs;
