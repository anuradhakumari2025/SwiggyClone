import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {  useState } from "react";
import RestaurantCard from "./RestaurantCard";
function TopRestaurant({data}) {
  console.log(data)
  const [value, setValue] = useState(0);
  console.log(value)
  function handleNext() {
    // console.log("button next clicked")
    // setValue(value + 40)
    value >= 470 ? "" : setValue((prevVal) => prevVal + 42);
  }
  let handlePrev = () => {
    // console.log("prev button clicked")
    // setValue(value - 55)
    value <= 0 ? "" : setValue((prevVal) => prevVal - 42);
  };
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between mt-2">
          <h1 className="font-bold text-2xl">
            Top restaurants chains in Bihar
          </h1>
          <div className=" flex justify-center items-center gap-2">
            <div
              className={`sideArrow ${
                value >= 176 ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={handlePrev}
            >
              <FaArrowLeft
                className={` ${
                  value >= 190 ? "text-gray-700" : "text-gray-400"
                }`}
              />
            </div>
            <div
              className={`sideArrow ${
                value <= 0 ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={handleNext}
            >
              <FaArrowRight
                className={` ${value <= 0 ? "text-gray-700" : "text-gray-400"}`}
              />
            </div>
          </div>
        </div>

        <div
          style={{ transform: `translateX(-${value}%)` }}
          className=" flex mt-4 gap-8 duration-300"
        >
          {data.map(({info,cta:{link}}) => (
            <div key={info.id} className="hover:scale-95 duration-400 relative min-w-[285px]">
              <RestaurantCard {...info} link={link}/>
            </div>
          ))}
        </div>
        <hr className="mt-10"/>
      </div>
    </>
  );
}

export default TopRestaurant;
