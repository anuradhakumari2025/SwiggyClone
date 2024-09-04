import React, { useState } from "react";
// import './App.css'

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLocationSearching } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const closeSideMenu = () => {
    console.log("hili")
    setToggle(false)
  }
  return (
    <>
      <div
        className="blackOverlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div className="w-[500px] bg-slate-200 h-full">
          <div className="">
            <div className="pt-5 pl-[50px]">
              <RxCross2 onClick={closeSideMenu} className="text-xl cursor-pointer" />
            </div>

            <input className=" caret-orange-600  focus:outline-none border border-gray-400 bg-slate-200 text-black  ml-[50px] mt-8 w-[400px] h-[45px] shadow-xl pl-[20px]" placeholder="Search for area,street name.."></input>

            <div className="border border-gray-400  ml-[50px] mt-8 w-[400px] h-[100px]">
              <div className="p-[20px]">
                <span>
                  <MdOutlineLocationSearching  className="inline text-xl cursor-pointer" />
                  <span className="pl-[10px] font-bold cursor-pointer hover:text-orange-600"> Get current location</span>
                  <div className="pl-[35px] cursor-pointer"> Using GPS</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="shadow-xl p-[15px]">
        <div className="border border-gray-900 max-w-[1200px] mx-auto flex items-center">
          <div className="w-[80px]">
            <img className="w-full" src="swiggy.jpg"></img>
          </div>

          <div className="w-[250px] ml-[20px]">
            <span className=" font-bold border-b-[2px] border-black cursor-pointer">
              Other
            </span>
            <MdKeyboardArrowDown
              onClick={showSideMenu}
              className="inline text-orange-600 font-bold text-xl cursor-pointer"
            />
          </div>

          <div className="flex justify-between w-[910px] text-[16px]">
            <div className="">
              <span className="">
                <PiShoppingCartSimple className="inline cursor-pointer " />
                <span className="cursor-pointer pl-[12px]">
                  Swiggy Corporate
                </span>
              </span>
            </div>

            <div className="">
              <span className="">
                <IoSearch className="inline cursor-pointer" />
                <span className="cursor-pointer pl-[12px]">Search</span>
              </span>
            </div>

            <div className="">
              <span className="">
                <BiSolidOffer className="inline cursor-pointer ml-2" />
                <span className="cursor-pointer pl-[12px]">Offers</span>
              </span>
            </div>

            <div className="">
              <span className="">
                <IoHelpBuoyOutline className="inline cursor-pointer" />
                <span className="cursor-pointer pl-[12px]">Help</span>
              </span>
            </div>

            <div className="">
              <span className="">
                <PiShoppingCartSimple className="inline cursor-pointer " />
                <span className="cursor-pointer pl-[12px]">Sign In</span>
              </span>
            </div>

            <div className="">
              <span className="">
                <PiShoppingCartSimple className="inline cursor-pointer " />
                <span className="cursor-pointer pl-[12px]">Cart</span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
