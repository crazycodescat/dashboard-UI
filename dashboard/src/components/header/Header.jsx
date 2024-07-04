import { CiSearch } from 'react-icons/ci';
import { IoIosGlobe } from 'react-icons/io';
import { FaRegMoon } from 'react-icons/fa';
import { IoChevronDownOutline } from 'react-icons/io5';
import { MdOutlineWidgets } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import NotificationBadge from '../NotificationBadge';
import { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';

const Header = () => {
  const [navLinks, setNavLinks] = useState(false);
  const navLinkToggler = () => {
    setNavLinks((prev) => !prev);
  };

  return (
    <div className="flex bg-white py-2 px-2 rounded-md w-full">
      {/* SIDEBAR BUTTON */}
      {/* HEADER */}
      <header className="flex gap-6 flex-col justify-between sm:flex-row w-full">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center ">
            <CiSearch fontSize={18} />
            <input
              className="focus:outline-none bg-transparent placeholder:text-xs"
              type="text"
              placeholder="Search"
            />
          </div>
          <button
            onClick={navLinkToggler}
            className="bg-purple-400 text-white rounded-full cursor-pointer p-2 sm:hidden"
          >
            <IoChevronDownOutline
              className={`${
                navLinks ? 'rotate-180 duration-300' : 'rotate-0 duration-300'
              }`}
            />
          </button>
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-3 items-center">
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
          </ul>
        </div>

        {/* nav Links */}
        {navLinks && <MobileNavLinks />}
        {/* <MobileNavLinks /> */}
      </header>
    </div>
  );
};
export default Header;
