import { Menu } from "../Menu/component"
import { Reviews } from "../Reviews/component"

import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.nameRestaurant}> Restaurant "{restaurant.name}"</h2>  
            <h3 className={styles.nameMenu}>Menu (specify the quantity) </h3>         
            <Menu dishes={restaurant.menu} />
            <h3 className={styles.reviews}>Reviews</h3>
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};