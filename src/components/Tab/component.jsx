import classNames from "classnames";
import styles from "./styles.module.css";

export const Tab = ({title, onClick, disabled}) => {

    return  (
    <button 
    className={classNames (styles.btnTwo, {
        [styles.disabled]: disabled,
    }
        )}
    onClick={onClick} 
    disabled={disabled}
    >
        {title} 
        </button>
    );
};
