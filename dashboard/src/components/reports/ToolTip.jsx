import { useState } from 'react';

const ToolTip = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return <div className="flex gap-4 p-2 z-10 absolute w-96 bg-gray-400">{children}</div>;
};

export default ToolTip;
