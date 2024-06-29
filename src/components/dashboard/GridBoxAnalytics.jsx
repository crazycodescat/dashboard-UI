/* eslint-disable react/prop-types */
import { FaArrowDownLong } from 'react-icons/fa6';

const GridBoxAnalytics = ({percentage, hikeOrDown}) => {
  return (
    <div className="flex flex-col gap-2 text-start w-fit">
      <p className="text-2xl ">{percentage}</p>
      <div className="flex gap-2 text-[12px] items-center">
        <FaArrowDownLong />
        <p className='text-green-400'>{hikeOrDown}</p>
      </div>
    </div>
  );
};
export default GridBoxAnalytics;
