import { RiHomeSmileLine } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import PropTypes from 'prop-types';

const SideBarChips = ({ LeftIcon, RightIcon, children, notificationBadge }) => {
  return (
    <div className="flex items-center justify-between gap-2 py-2 text-sm w-full cursor-pointer">
      <div className="flex gap-3 items-center">
        <LeftIcon />
        {children}
      </div>
      {notificationBadge && (
        <div className="flex justify-center  w-6 h-5 rounded-full text-white bg-red-500">
          5
        </div>
      )}
      <RightIcon />
    </div>
  );
};

export default SideBarChips;
