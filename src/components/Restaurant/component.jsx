import { Menu } from "../Menu/component"
import { ReviewForm } from "../ReviewForm/component";
import { Reviews } from "../Reviews/component"



import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.restaurant}>
            <h2 className={styles.nameRestaurant}> Restaurant " {restaurant.name} " </h2>  
            <h3 className={styles.nameMenu}>MENU (specify the quantity) </h3>         
            <Menu dishes={restaurant.menu} />
            <h3 className={styles.reviews}>Reviews</h3>
            <Reviews reviews={restaurant.reviews} />
            <br /><br />
            <ReviewForm />
            <br /><br />
        </div>
    );
};