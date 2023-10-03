import { Review } from "../Review/component";
import styles from "./styles.module.css";

export const Reviews = ({reviews}) => {
    return <ul >
        {reviews.map (review => <li className={styles.rew} key={review.id}> <Review review={review} /> </li>)}
    </ul>;
    
}

