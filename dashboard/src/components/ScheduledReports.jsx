import { useEffect, useState } from 'react';

import Select from './Select';
import Button from './Button';
import Switch from './Switch';

const ScheduledReports = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isSwitch, setIsSwitch] = useState(false);

  const switchHandler = () => {
    setIsSwitch((prev) => !prev);
  };
  const [frequency, setFrequency] = useState('');
  const handleChange = (e) => {
    setFrequency(e.target.value);
  };
  useEffect(() => {
    // Function to get current date and time in format YYYY-MM-DDTHH:MM
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    setCurrentDateTime(getCurrentDateTime());
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="textxl font-semibold">SCHEDULED REPORTS</h2>
        <div className="flex gap-6">
          <input
            type="datetime-local"
            className="px-3 py-2 border rounded-md text-xs text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            value={currentDateTime}
            onChange={(e) => setCurrentDateTime(e.target.value)}
          />
          <Select
            frequency={frequency}
            handleChange={handleChange}
            classes="border border-gray-300 bg-button hover:bg-hoverBtn cursor-pointer text-white text-xs font-medium uppercase rounded-md block w-[120px] px-2 border rounded-md text-gray-700 focus:outline-none"
          >
            <option className="bg-white text-black" value="yearly">
              Yearly
            </option>
            <option className="bg-white text-black" value="monthly">
              Monthly
            </option>
            <option className="bg-white text-black" value="weekly">
              Weekly
            </option>
            <option className="bg-white text-black" value="daily">
              Daily
            </option>
          </Select>

          {/* SEND NOW BUTTON */}
          <Button
            classess="px-4 py-2 bg-button hover:bg-hoverBtn rounded-md text-white text-xs font-medium"
            text="SEND NOW"
          />
          {isSwitch && (
            <Button
              classess="px-4 py-2 bg-button hover:bg-hoverBtn rounded-md text-white text-xs font-medium"
              text="SCHEDULE NOW"
            />
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Switch isSwitch={isSwitch} switchHandler={switchHandler} />
        <p className="text-xs font-bold">Repeat Emails</p>
      </div>
    </div>
  );
};

export default ScheduledReports;
