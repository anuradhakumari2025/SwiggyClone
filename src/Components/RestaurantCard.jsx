import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

function RestaurantCard(info) {
  // console.log(info.link.split("/")[5])
  return (
    <Link to={`/restaurantmenu/${info.link.split("/")[5]}`}>
      <div className="relative w-full h-[182px]">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
          alt={info.areaName}
          className="w-full h-full rounded-2xl object-cover"
        />
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl  absolute top-0 bottom-0 left-0 right-0"></div>
        <p className="absolute ml-3 mb-2 font-bold bottom-0 left-0 text-white right-0">
          {info?.aggregatedDiscountInfoV3
            ? info?.aggregatedDiscountInfoV3?.header +
              " " +
              info?.aggregatedDiscountInfoV3?.subHeader
            : ""}
        </p>
      </div>
      <div className="mt-2">
        <h2 className="font-bold text-xl">{info?.name}</h2>
        <div className="flex flex-wrap gap-2 items-center font-semibold text-[18px]">
          <span>
            <MdStars className="text-green-700 text-xl" />
          </span>
          <p className=" flex items-center">
            {info?.avgRating}
            <span>
              <BsDot className="text-xl" />{" "}
            </span>
            <span>{info?.sla["slaString"]}</span>
          </p>
        </div>
        <p className="text-gray-500 text-[15px] line-clamp-1">
          {info?.cuisines[0] + " " + info?.cuisines.join(", ")}
        </p>
        <p className="text-gray-500 text-[15px]">{info?.locality}</p>
      </div>
    </Link>
  );
}
export default RestaurantCard;
