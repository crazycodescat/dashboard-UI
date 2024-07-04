const ProfitCandles = () => {
  return (
    <div className="flex flex-col gap-1">
      {/* CANDLES */}
      <div className="flex gap-1 items-end">
        {/* ACTIVE */}
        <div className="w-[6px] bg-green-500 h-12"></div>
        {/* UNACTIVE */}
        <div className="w-[6px] bg-green-500 h-8 opacity-25"></div>
      </div>
      <p className="text-[10px] text-white">Jan</p>
    </div>
  );
};

export default ProfitCandles;
