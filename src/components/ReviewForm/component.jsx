
import { useReducer } from "react"
// import { useState } from "react"
import styles from "./styles.module.css";

const Default_Value = {
    Name:"Name...",
    review: "Our review...",
    rating: "5"
}

const reducer = (state, action) => {
    switch (action?.type) {
        case "setName":            
            return {...state, Name: action.payload };
        case "setReview":            
        return {...state, review: action.payload };
        case "setRating":            
        return {...state, rating: action.payload };
        case "reset":            
            return{ ...Default_Value };

        default:
            return state; 
    }

}

export const ReviewForm = () => {

    // const [formValue, setFormValue] = useState (Default_Value);
    
    const [formValue, dispatch] = useReducer(reducer,  Default_Value);

    return <div className={styles.ReviewForm}>
        <h3 >Здесь вы можете оставить свой отзыв:</h3>
        <div>            
            <label>Name</label>
            <input value={formValue.Name}
            onChange={(event) => {
                dispatch({type: 'setName', payload: event.target.value});
            }}
            type="text" />
        </div>

        <div>
        <label>Our Review</label>
        <textarea className={styles.inputReview} value={formValue.review}
            onChange={(event) => {
            dispatch({type: 'setReview', payload: event.target.value});
        }}
        type="text" />
        </div>

        <div>
            <label>Rating in your opinion (0-5) </label>
            <input  value={formValue.rating}
            onChange={(event) => {
                dispatch({type: 'setRating', payload: event.target.value});
            }}
            type="text" />
        </div>

        <div>
            <button className={styles.button} onClick={() => dispatch({ type: "reset"})}>Добавить отзыв</button>
        </div>


    </div>
}