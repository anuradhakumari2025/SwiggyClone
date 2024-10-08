import React, { useState } from "react";
// import './App.css'
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLocationSearching } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const closeSideMenu = () => {
    // console.log("hili")
    setToggle(false);
  };
  const links = [
    {
      icon: <PiShoppingCartSimple />,
      name: "Swiggy Corporate",
    },
    {
      icon: <IoSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <FaRegUser />,
      name: "Sign In",
    },
    {
      icon: <PiShoppingCartSimple />,
      name: "Cart",
    },
  ];
  return (
    <>
      {/* <div
        className="blackOverlay w-full h-full fixed duration-500"
        onClick={closeSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="w-[500px] bg-slate-200 h-full"
        >
          <div className="">
            <div className="pt-5 pl-[50px]">
              <RxCross2
                onClick={closeSideMenu}
                className="text-xl cursor-pointer"
              />
            </div>

            <input
              className=" caret-orange-600  focus:outline-none border border-gray-400 bg-slate-200 text-black  ml-[50px] mt-8 w-[400px] h-[45px] shadow-xl pl-[20px]"
              placeholder="Search for area,street name.."
            ></input>

            <div className="border border-gray-400  ml-[50px] mt-8 w-[400px] h-[100px]">
              <div className="p-[20px]">
                <span>
                  <MdOutlineLocationSearching className="inline text-xl cursor-pointer" />
                  <span className="pl-[10px] font-bold cursor-pointer hover:text-orange-600">
                    {" "}
                    Get current location
                  </span>
                  <div className="pl-[35px] cursor-pointer"> Using GPS</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <header className="shadow-xl">
        <div className="border border-gray-900 max-w-[1250px] mx-auto flex items-center">
          <div className="w-[80px]">
          <Link to={"/"}>
            <img className="w-full" src="swiggy.jpg"></img>
            </Link>

          </div>
          
          <div className="w-[250px] ml-[20px]">
            <span
              className=" font-bold border-b-[2px] border-black cursor-pointer"
              onClick={showSideMenu}
            >
              Other
            </span>
            <MdKeyboardArrowDown
              onClick={showSideMenu}
              className="inline text-orange-600 font-bold text-xl cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-12 ml-auto font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-orange-600 cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
        <Outlet/>
      </header>
    </>
  );
}

export default Header;
