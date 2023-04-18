import React from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="text-white font-bit h-[10%] flex justify-between">
      <div className="flex items-center justify-center w-16 h-full border-white border-opacity-20 border-[1px]">
        <img src={pokeballIcon} className="w-8 h-8" alt="pokeball Icon" />
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center border-[0.5px] border-white border-opacity-20 justify-center w-16 h-full text-lg text-white">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
