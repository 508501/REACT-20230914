import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from "./styles.module.css"

export const MainPage = () => {
const [activeRestaurantIndex, setActiveRestaurantIndex] = useState (0);

return (
  <div className={styles.root}>
    <Header className={styles.header}/>    
    
    <main>  
    <RestaurantTabs    
    restaurants= {restaurants}
    activeTabIndex = {activeRestaurantIndex}
    onTabSelect = {setActiveRestaurantIndex}
    />
    <Restaurant restaurant = {restaurants[activeRestaurantIndex]}
    />
    <br />
    </main>
    <Footer />
  </div>

);
}