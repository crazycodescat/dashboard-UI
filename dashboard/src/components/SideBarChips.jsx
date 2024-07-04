/* eslint-disable react/prop-types */
import { useState } from 'react';
import SideBarSubMenu from './sideBar/SideBarSubMenu';

const SideBarChips = ({
  LeftIcon,
  RightIcon,
  children,
  notificationBadge,
  subMenu,
}) => {
  const [open, setOpen] = useState(false);

  const sideBarSubMenuToggler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={sideBarSubMenuToggler}>
        <div className="flex items-center justify-between gap-2 py-2 text-sm w-full cursor-pointer">
          <div className="flex gap-3 items-center">
            {LeftIcon}
            {children}
          </div>
          {notificationBadge && (
            <div className="flex justify-center  w-6 h-5 rounded-full text-white bg-red-500">
              5
            </div>
          )}
          <div className={`${open ? 'rotate-90' : 'rotate-0'} duration-300`}>
            {RightIcon}
          </div>
        </div>
      </button>
      {open && <SideBarSubMenu subMenu={subMenu} />}
    </>
  );
};

export default SideBarChips;
