const gridBoxHeader = ({startContent, endContent}) => {
  return (
    <div className="flex justify-between w-full text-sm gap-6">
      <p>{startContent}</p>
      <p>{endContent}</p>
    </div>
  );
};

export default gridBoxHeader;
