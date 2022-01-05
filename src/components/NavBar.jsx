import React from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center justify-between">
      <div className="text-[20px] font-bold flex items-center sm:text-[30px]">
        NertCard
        <BsSunFill
          size={"20px"}
          color={"yellow "}
          className="cursor-pointer ml-[5px] sm:text-[25px]"
        />
      </div>
      <ul className="relative sm:flex sm:gap-3 sm:text-[25px]">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            onClick={handleClick}
            className="cursor-pointer"
          />
        ) : isMobile && !openMenu ? (
          <HiOutlineMenu
            size={"24px"}
            onClick={handleClick}
            className="cursor-pointer"
          />
        ) : (
          <>
            <li className='btn-hover'>Feature</li>
            <li className='btn-hover'>Menu</li>
            <li className='btn-hover'>Our Story</li>
            <li className='btn-hover ml-[90px]'>Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute bg-white right-8 p-8 text-black text-center text-13 ">
            <li>Feature</li>
            <li>Menu</li>
            <li>Our Story</li>
            <li>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
