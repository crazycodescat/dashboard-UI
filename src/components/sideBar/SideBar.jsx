import { IoChevronBackSharp } from 'react-icons/io5';
import SideBarChips from '../SideBarChips';
import { RiHomeSmileLine } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { GiArchiveRegister } from 'react-icons/gi';

const SideBar = () => {
  const chipsArr = [
    {
      leftIcon: <FaCartShopping />,
      name: 'eCommerce',
      rightIcon: <MdChevronRight />,
    },
    {
      leftIcon: <GiArchiveRegister />,
      name: 'Report',
      rightIcon: <MdChevronRight />,
    },
  ];

  return (
    <div className="absolute top-0 text-black bg-white border-solid border p-3">
      {/* SIDEBAR */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 relative w-52">
          <p className="text-xl font-semibold">SNEAT</p>
          <button className="cursor-pointer outline outline-4 outline-[#f6f5fa] w-4 h-4 rounded-full bg-purple-400 flex justify-center items-center absolute top-1 -right-5">
            <IoChevronBackSharp className="text-white text-[14px] " />
          </button>
        </div>
        <SideBarChips
          LeftIcon={RiHomeSmileLine}
          RightIcon={MdChevronRight}
          notificationBadge={true}
        >
          Dashboard
        </SideBarChips>
      </div>
      {/* APPS AND PAGES */}p
      <div>
        <p className="text-[10px] font-semibold text-slate-500">
          APPS AND PAGES
        </p>
      </div>
    </div>
  );
};

export default SideBar;
