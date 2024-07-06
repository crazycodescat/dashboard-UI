/* eslint-disable react/prop-types */
import DirectReports from './DirectReports';
import ScheduledReports from './ScheduledReports';
import ColumnsSelection from './ColumnsSelection';

const EmailDialogBox = ({ columns }) => {
  return (
    <div className="w-[617px] bg-white text-black px-6 py-10 rounded-xl">
      {/* HEADING */}
      <h1 className="text-2xl font-semibold">EMAIL REPORT</h1>

      {/* DIRECT REPORTS */}
      <DirectReports />

      {/* SELECT COLUMNS */}
      <ColumnsSelection columns={columns} />

      {/* SCHEDULED REPORTS */}
      <ScheduledReports />
    </div>
  );
};

export default EmailDialogBox;
