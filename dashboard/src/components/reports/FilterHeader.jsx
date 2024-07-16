/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const FilterHeader = ({
  headerName,
  activeHeaderHandler,
  children,
  classess,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filterToggler = () => {
    setOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     console.log(event.target.innerHTML);
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target) &&
  //       !event.target.closest('.sidebar')
  //     ) {
  //       setOpen(false);
  //     }

  //     if (event.target.closest('.filter-content')) {
  //       setOpen(false);
  //     }
  //   };

  //   window.document.addEventListener('mousedown', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`flex justify-between items-center  bg-filtersHeader p-2 cursor-pointer close rounded-md ${classess}`}
          ref={dropdownRef}
          onClick={(e) => {
            filterToggler();
            activeHeaderHandler(e);
          }}
        >
          <h3 className="capitalize text-[12px] font-light">
            filter by {headerName}
          </h3>
          <HiChevronDown
            className={` ${open ? 'rotate-180' : 'rotate-0'} duration-300`}
          />
        </div>
        {open && children}
      </div>
    </>
  );
};

export default FilterHeader;
