import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Button } from "../Button/component";

export const Product = () => {

    const [amount, setAmount] = useState(0);

    const decrement = () => setAmount (amount + 1);

    return (
        <div>
        <h2> 🥘 {restaurants[0].name}</h2>      
        <h3>Меню</h3>
        <div>
          <ul>
            
            <li>              
          <p>Наименование блюда: "{restaurants[0].menu[0].name}"</p> 
          <Button title="+" onClick={decrement } /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>          
          </li>
          
          <li>
          <p>Наименование блюда: "{restaurants[0].menu[1].name}"</p>
          <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>
          </li>
            <li>
          <p>Наименование блюда: "{restaurants[0].menu[2].name}"</p>
          <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>
          </li>    
      </ul>
        </div>
        <h3>Отзывы 🖋 </h3>
        <ul>
          <li>      
        <p>Отзыв: "{restaurants[0].reviews[0].text}"</p>
        <p>Автор отзыва: {restaurants[0].reviews[0].user}</p>
        </li>
        <li>
        
        <p>Отзыв: "{restaurants[0].reviews[1].text}"</p>
        <p>Автор отзыва: {restaurants[0].reviews[1].user}</p>
        </li>         
        </ul>
        </div>
    )
}

