import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RestaurantMenu() {
  let [menudata,setMenuData] = useState("")
  const {id} = useParams()
  // console.log(id)
  const parts = id.split("-");
  // Get the last element
  const lastPart = parts[parts.length - 1]; 
  // Use a regular expression to extract the numeric part
  const restaurantId = lastPart.match(/\d+/)[0];
  console.log(restaurantId); 




  async function FetchMenu() {
    console.log("Anuradha")
    try {
      let data = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
      );
      console.log("Status:", response.status); // Log status to debug
      
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      
      let res = await data.json();
      console.log("Menu", res);
      
      let menuName = res?.data?.cards[0]?.card?.card?.text;
      console.log("Restaurant Menu", menuName);
      setMenuData(menuName);
      
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }
  







  // async function FetchMenu() {
  //   try {
  //     let data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
  //     let res = await data.json();
  //     console.log("Menu",res);
  //     let menuName = res?.data?.cards[0]?.card?.card?.text
  //     console.log("Restaurant Menu",menuName)
  //     setMenuData(menuName)

  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // }
useEffect(()=>{
FetchMenu()
},[])
  return (
    <div>RestaurantMenu{restaurantId}{menudata}</div>
  )
}

export default RestaurantMenu