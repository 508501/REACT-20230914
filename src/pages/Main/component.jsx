import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
const [activeRestaurantIndex, setActiveRestaurantIndex] = useState (0);

return (
  
  <div>    
    <h3>FOOD delivery</h3> 
    <RestaurantTabs    
    restaurants= {restaurants}
    onTabSelect = {setActiveRestaurantIndex}
    />
    <Restaurant restaurant = {restaurants[activeRestaurantIndex]}
    />

  </div>
);
}