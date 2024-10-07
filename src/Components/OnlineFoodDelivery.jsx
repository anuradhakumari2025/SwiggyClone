import React from "react";
import RestaurantCard from "./RestaurantCard";
import { BsDot } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { PiSlidersHorizontalThin } from "react-icons/pi";

function OnlineFoodDelivery({data}) {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl mb-5">
        Restaurants with online food delivery in Bihar
      </h1>
      <div className="flex gap-2 mb-4">
        <div className="filter flex items-center gap-2"><span>Filter</span>
        <PiSlidersHorizontalThin />
        </div>
        <div className="filter flex items-center gap-2"><span>Sort By</span>
        <FaChevronDown />
        </div>
        <div className="filter">Ratings 4.0&#43;</div>
        <div className="filter">Pure Veg</div>
        <div className="filter">Offers</div>
        <div className="filter">Rs. 300-Rs.600</div>
        <div className="filter">Less than Rs.300</div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {data.map(({info,cta:{link}}) => (
          <div key={info.id} className="hover:scale-95 duration-300" >
            <RestaurantCard {...info} link={link} />
          </div>
        ))}
      </div>
      <hr className="mt-10"/>
      <span><BsDot/></span>
    </div>
  );
}

export default OnlineFoodDelivery;
