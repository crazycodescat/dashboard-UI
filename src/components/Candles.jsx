/* eslint-disable react/prop-types */
const Candles = ({ dayLetter }) => {
  return (
    <div className="flex flex-col w-fit">
      <div className="w-2 h-14 bg-candlePurple rounded-full"></div>
      {/* WEEK DAY LETTER */}
      <p className="text-[8px] text-neutral-400">{dayLetter}</p>
    </div>
  );
};

export default Candles;
