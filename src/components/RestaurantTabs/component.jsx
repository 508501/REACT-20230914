import { useTheme } from "../../contexts/Theme";
import { Tab } from "../Tab/component";
import styles from "./styles.module.css"

export const RestaurantTabs = ({  restaurants, activeTabIndex,  onTabSelect }) => {
const theme = useTheme();
    return (
        <div className={styles.restaurantTab}>   
            {restaurants.map (( restaurant, index) => (
                <Tab                
                key={restaurant.id}
                title={restaurant.name}
                isActive={index === activeTabIndex}
                onClick={ () => onTabSelect(index)}
                />
            ))}

        </div>
    )
}