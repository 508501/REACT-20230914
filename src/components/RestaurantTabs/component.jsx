import { Tab } from "../Tab/component";
import styles from "./styles.module.css"

export const RestaurantTabs = ({  restaurants,  onTabSelect }) => {

    return (
        <div className={styles.btn}>   
            {restaurants.map (( restaurant, index) => (
                <Tab                
                key={restaurant.id}
                title={restaurant.name}
                onClick={ () => onTabSelect(index)}
                />
            ))}

        </div>
    )
}