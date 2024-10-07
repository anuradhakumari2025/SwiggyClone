
import React from 'react'

function Test() {
  async function fetchData(){
    try {
      let response = await fetch("https://foodish-api.com/images/:food")
      let resultData = await response.json()
      console.log(resultData)  
    } catch (error) {
      console.log(error)
    }
    }
    fetchData()
  return (
    <div>test</div>
  )
}

export default Test
{
  data.map((item)=>(
    <img
    src={`https://meida-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
    />
  ))
}
const [data, setData] = useState([]);
  async function fetchData() {
    try {
      let response = await fetch(
        "/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let resultData = await response.json();
      // setData(resultData);
      console.log(resultData);

      console.log(resultData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      let images = resultData?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      setData(images);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);