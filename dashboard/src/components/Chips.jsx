/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5';

const Chips = ({ activeFilterName, removeChipsHandler, index }) => {
  return (
    <div className="flex gap-4 items-center p-2 px-2 rounded-full text-white bg-primary03 w-fit">
      <p className="text-xs font-normal">{activeFilterName.name}</p>
      <button
        className="bg-white text-black rounded-full p-[2px]"
        onClick={() => removeChipsHandler(index)}
      >
        <IoClose fontSize={12} />
      </button>
    </div>
  );
};

export default Chips;
