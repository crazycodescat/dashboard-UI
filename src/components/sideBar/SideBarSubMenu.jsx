import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SideBarSubMenu = ({ subMenu }) => {
  return (
    <ul>
      {subMenu?.map((menu, i) => {
        return (
          <Link key={i} to={menu.path}>
          <li
            key={i}
            className="py-1 bg-primary02 text-xs px-6 hover:bg-primary05"
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
