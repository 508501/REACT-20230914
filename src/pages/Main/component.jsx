import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";


export const MainPage = () => {
const [activeRestaurantIndex, setActiveRestaurantIndex] = useState (0);

return (
  
  <div>
    <Header />     
    <RestaurantTabs    
    restaurants= {restaurants}
    onTabSelect = {setActiveRestaurantIndex}
    />
    <Restaurant restaurant = {restaurants[activeRestaurantIndex]}
    />

  </div>
);
}