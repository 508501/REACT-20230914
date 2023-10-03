import { Dish } from "../Dish/component";
import styles from "./styles.module.css"

export const Menu = ({ dishes }) => {
    return (
        
        <ul  className={styles.container}>
            {dishes.map((dish) => (
            <li className={styles.dishesName} key={dish.id}>                
                <Dish dish={dish} />
            </li>
            ))}
        </ul>
    );
};