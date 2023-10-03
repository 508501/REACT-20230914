import { useState } from "react";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({ dish, disabled }) => {

const [amount, setAmount] = useState (0);
    return (
        <div>
            {dish.name} -

            <button className={classNames(styles.btnThree, disabled && styles.btnThree)}
            disabled={amount === 0} onClick={ () => setAmount(amount - 1)}>
                -
            </button>

            {amount}

            <button className={`${styles.btnThree} ${disabled ? styles.disabled : ""}`}
            disabled={amount === 5} onClick={ () => setAmount(amount +1 )}>
                +
            </button>

        </div>
    );
};