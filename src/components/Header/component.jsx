
import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/Theme";


export const Header = ({ className }) => {

    const { toggleTheme } = useTheme();


    return <header className={classNames (styles.par, className)}>
        <div className={styles.poor}>
    <p>CHOOSE A RESTAURANT</p>
    <p className={styles.makeOrder}>MAKE AN ORDER WITH DELIVERY</p>
    <p>______</p>
    <p className={styles.time}>MONDAY - SUNDAY</p>
    <p>1:00 AM - 0:00 PM</p>
    
    {/* <button onClick={toggleTheme}>SwitchTheme</button> */}
    </div>
    </header>
}