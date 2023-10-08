
import styles from "./styles.module.css";

export const Tab = ({title, onClick, disabled, isActive }) => {

    return (
    <button className ={`${styles.button} ${disabled ? styles.disabled : ""}`} 
    onClick={onClick} 
    disabled={disabled}
    > 
    {title} 
    </button>
    );
};

