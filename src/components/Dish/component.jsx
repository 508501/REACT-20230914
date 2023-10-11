import { useState } from "react";

import styles from "./styles.module.css";


export const Dish = ({ dish }) => {

const [amount, setAmount] = useState (0);
    return (
        <div>
            {dish.name} -

            <button className={styles.button}
            disabled={amount === 0} onClick={ () => setAmount(amount - 1)}>
                -
            </button>

            {amount}

            <button className={styles.button} 
            disabled={amount === 5} onClick={ () => setAmount(amount +1 )}>
                +
            </button>

        </div>
    );
};