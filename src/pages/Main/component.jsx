import { restaurants } from "../../constants/mock"
import { Product } from "../../components/restaurants/component"
import { Button } from "../../components/Button/component"
import { useState } from "react"


export const MainPage = () => {

  const [amount, setAmount] = useState (0);
    return (
        <div>

<Button title="Dishoom" /> 
<Button title="Homeslice" />
<Button title="Fabrique" /> 
<Button title="Flat Iron" />

<Product />

<div>
      <h2> 🥘 {restaurants[1].name}</h2>      
      <h3>Меню</h3>
      <div>
        <ul>
          <li>
        <p>Наименование блюда: "{restaurants[1].menu[0].name}"</p>
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[1].menu[1].name}"</p>  
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/> 
          </li>               
    </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>      
      <p>Отзыв: "{restaurants[1].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[1].reviews[0].user}</p>
      </li>
      <li>      
      <p>Отзыв: "{restaurants[1].reviews[1].text}"</p>
      <p>Автор отзыва: {restaurants[1].reviews[1].user}</p>
      </li>    
      <li>      
      <p>Отзыв: "{restaurants[1].reviews[2].text}"</p>
      <p>Автор отзыва: {restaurants[1].reviews[2].user}</p>
      </li> 
      </ul>
      </div>
      
      <div>
      <h2> 🥘 {restaurants[2].name}</h2>      
      <h3>Меню</h3>
      <div>
        <ul>
          <li>
        <p>Наименование блюда: "{restaurants[2].menu[0].name}"</p> 
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>   
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[2].menu[1].name}"</p>  
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[2].menu[2].name}"</p>  
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>
          </li>      
    </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>      
      <p>Отзыв: "{restaurants[2].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[2].reviews[0].user}</p>
      </li>
      </ul>
      </div>
      <div>
      <h2> 🥘 {restaurants[3].name}</h2>      
      <h3>Меню</h3>
      <div>
        <ul>
          <li>
        <p>Наименование блюда: "{restaurants[3].menu[0].name}"</p> 
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>   
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[3].menu[1].name}"</p>
        <Button title="+" onClick={ () => setAmount (amount + 1)} /> 
          {amount}
          <Button title="-" onClick={ () => setAmount (amount - 1)}/>     
          </li>
          </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>      
      <p>Отзыв: "{restaurants[3].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[0].reviews[0].user}</p>
      </li>
      <li>     
      <p>Отзыв: "{restaurants[3].reviews[1].text}"</p>
      <p>Автор отзыва: {restaurants[3].reviews[1].user}</p>
      </li>         
      </ul>
      </div>

</div>
    )
}