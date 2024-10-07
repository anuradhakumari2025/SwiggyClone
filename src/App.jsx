import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Body />}></Route>
        <Route path="/restaurantmenu/:id" element={<RestaurantMenu/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
