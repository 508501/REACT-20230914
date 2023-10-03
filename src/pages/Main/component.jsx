import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Footer } from "../../components/Footer/component";


export const MainPage = () => {
const [activeRestaurantIndex, setActiveRestaurantIndex] = useState (0);

return (
  
  <div>
    <Footer />     
    <RestaurantTabs    
    restaurants= {restaurants}
    onTabSelect = {setActiveRestaurantIndex}
    />
    <Restaurant restaurant = {restaurants[activeRestaurantIndex]}
    />

  </div>
);
}