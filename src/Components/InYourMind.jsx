import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ImageData } from "./ImageData";
import { useEffect, useState } from "react";

function InYourMind() {
  const [data, setData] = useState([]);
  const [value,setValue] = useState(0)
  useEffect(() => {
    // Set the data from the imported file
    setData(ImageData);
  }, []);
  // console.log(value)
   function handleNext(){
    // console.log("button next clicked")
    value >= 176? "":   setValue((prevVal)=>prevVal + 44)
  }
  let handlePrev = () =>{
    // console.log("prev button clicked")
    value <= 0? "":  setValue((prevVal)=>prevVal - 44)
  }
  return (
    <>
    <div className="flex justify-between mt-2" >
          <h1 className="font-bold text-2xl">
          What's on your mind &#63;
          </h1>
          <div className=" flex justify-center items-center gap-2">
          <div className={`sideArrow ${value >= 176 ?"bg-gray-300":"bg-gray-100"}`} onClick={handlePrev}>
            <FaArrowLeft className={` ${value >= 176 ?"text-gray-700":"text-gray-400"}`} />
          </div>
          <div className={`sideArrow ${value <= 0 ?"bg-gray-300":"bg-gray-100"}`} onClick={handleNext}>
            <FaArrowRight  className={` ${value <= 0 ?"text-gray-700":"text-gray-400"}`} />
          </div>
        </div>
        </div>
        <div style={{ transform: `translateX(-${value}%)` }} className=" flex gap-9 w-full mt-10 duration-300 mb-14">
          {data.map((item) => (
            <img
              key={item.id}
              src={item.url} 
              alt={`${item.id}`} 
              className="rounded-full h-[120px] w-[120px]"
            />
          ))}
        </div>
        <hr className="mt-4"/>
    </>
  )
}

export default InYourMind