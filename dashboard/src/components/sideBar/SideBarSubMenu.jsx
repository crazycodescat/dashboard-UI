/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarSubMenu = ({ subMenu }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const setOnActiveMenu = (idx) => {
    setActiveMenu(idx);
  };

  return (
    <ul>
      {subMenu?.map((menu, i) => {
        return (
          <Link key={i} to={menu.path}>
            <li
              onClick={() => setOnActiveMenu(i)}
              key={i}
              className={` ${
                activeMenu === i ? 'bg-white hover:bg-white text-black' : null
              } py-1 bg-primary02 text-xs px-6 hover:bg-primary05`}
            >
              {menu.subMenuName}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default SideBarSubMenu;
