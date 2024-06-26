import { FaPaypal } from 'react-icons/fa';

const ReportStrip = ({ ReportIcon, ReportValues, ReportAnalytics }) => {
  return (
    <div className="flex gap-2 text-xs justify-between items-center bg-primary01 w-48 py-2 px-3 rounded-md">
      <div className="flex gap-3 items-center">
        {/* Report Icon */}
        <div className="p-2 bg-white rounded-md">
          <ReportIcon className="text-blue-600 text-lg" />
        </div>

        {/* Report Values */}
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-400">{ReportValues.valueType}</h4>
          <p>{ReportValues.price}</p>
        </div>
      </div>

      {/* Report Analytics */}
      <div>
        <p className="text-green-600 text-[10px]">{ReportAnalytics}</p>
      </div>
    </div>
  );
};

export default ReportStrip;
