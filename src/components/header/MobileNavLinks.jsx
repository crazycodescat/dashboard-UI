import { IoIosGlobe } from 'react-icons/io';
import { FaRegMoon } from 'react-icons/fa';
import { MdOutlineWidgets } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import NotificationBadge from '../NotificationBadge';

const MobileNavLinks = () => {
  return (
    <ul className="flex gap-3 items-center justify-between">
      <li className="p-1 cursor-pointer ">
        <IoIosGlobe fontSize={18} className="text-neutral-600" />
      </li>
      <li className="p-1 cursor-pointer ">
        <FaRegMoon fontSize={16} className="text-neutral-600" />
      </li>
      <li className="p-1 cursor-pointer ">
        <MdOutlineWidgets fontSize={18} className="text-neutral-600" />
      </li>
      <li className="relative p-1 cursor-pointer ">
        <NotificationBadge classes="absolute top-[5px] right-[5px]" />
        <FaRegBell fontSize={16} className="text-neutral-600" />
      </li>
      <li className="p-1 cursor-pointer ">
        <img className="max-w-8" src="src/assets/images/9440461 1.png" alt="" />
      </li>
    </ul>
  );
};
export default MobileNavLinks;
