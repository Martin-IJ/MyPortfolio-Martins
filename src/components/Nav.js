import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="sticky bottom-2 lg:bottom-8 w-full overflow-hidden z-50 lg:mt-10">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <NavLink to="/">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <BiHomeAlt />
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <BiUser />
            </div>
          </NavLink>
          <NavLink to="/services">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <BsClipboardData />
            </div>
          </NavLink>
          <NavLink to="/work">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <BsBriefcase />
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <BsChatSquareText />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
