import InYourMind from "./InYourMind";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import TopRestaurant from "./TopRestaurant";
import { useState,useEffect } from "react";
const Body = () => {
  const [data, setData] = useState([]);

  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
  async function fetchData() {
    try {
      let response = await fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      let parsedData = JSON.parse(data.contents); // Parse the data from the proxy
      let images =
        parsedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Body",images)
      setData(images);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }
  
  

  // async function fetchData() {
  //   try {
  //     let response = await fetch(
  //       "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     let resultData = await response.json();
  //     let images =
  //       resultData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;
  //     // console.log(images);
  //     setData(images);
  //   } catch (error) {
  //     console.error("Fetch error: ", error);
  //   }
  // }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-[78%] mx-auto mt-3 overflow-hidden">
        <InYourMind />
        <TopRestaurant data={data}/> 
        <OnlineFoodDelivery data={data}/>
        </div>
      </div>
    </>
  );
};

export default Body;

