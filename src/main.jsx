import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from "./constants/mock"

const rootElement = document.getElementById ("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>

    <div>
      <h2> 🥘 {restaurants[0].name}</h2>      
      <h3>Меню</h3>
      <div>
        <ul>
          <li>
        <p>Наименование блюда: "{restaurants[0].menu[0].name}"</p>
        <p>Стоимость: {restaurants[0].menu[0].price}</p>
        <p>Ингридиенты: {restaurants[0].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[0].menu[1].name}"</p>
        <p>Стоимость: {restaurants[0].menu[1].price}</p>
        <p>Ингридиенты: {restaurants[0].menu[1].ingredients[0]}, {restaurants[0].menu[1].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[0].menu[2].name}"</p>
        <p>Стоимость: {restaurants[0].menu[2].price}</p>
        <p>Ингридиенты: {restaurants[0].menu[2].ingredients[0]}, {restaurants[0].menu[2].ingredients}{1}</p>
          </li>      
    </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>
      <p>Рейтинг(0-5): {restaurants[0].reviews[0].rating} ⭐</p>
      <p>Отзыв: "{restaurants[0].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[0].reviews[0].user}</p>
      </li>
      <li>
      <p>Рейтинг(0-5): {restaurants[0].reviews[1].rating} ⭐</p>
      <p>Отзыв: "{restaurants[0].reviews[1].text}"</p>
      <p>Автор отзыва: {restaurants[0].reviews[1].user}</p>
      </li>         
      </ul>
      </div>

      <div>
      <h2> 🥘 {restaurants[1].name}</h2>      
      <h3>Меню</h3>
      <div>
        <ul>
          <li>
        <p>Наименование блюда: "{restaurants[1].menu[0].name}"</p>
        <p>Стоимость: {restaurants[1].menu[0].price}</p>
        <p>Ингридиенты: {restaurants[0].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[1].menu[1].name}"</p>
        <p>Стоимость: {restaurants[1].menu[1].price}</p>
        <p>Ингридиенты: {restaurants[1].menu[1].ingredients[0]}, {restaurants[0].menu[1].ingredients[1]}</p>
          </li>               
    </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>
      <p>Рейтинг(0-5): {restaurants[1].reviews[0].rating} ⭐</p>
      <p>Отзыв: "{restaurants[1].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[1].reviews[0].user}</p>
      </li>
      <li>
      <p>Рейтинг(0-5): {restaurants[1].reviews[1].rating} ⭐</p>
      <p>Отзыв: "{restaurants[1].reviews[1].text}"</p>
      <p>Автор отзыва: {restaurants[1].reviews[1].user}</p>
      </li>    
      <li>
      <p>Рейтинг(0-5): {restaurants[1].reviews[2].rating} ⭐</p>
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
        <p>Стоимость: {restaurants[2].menu[0].price}</p>
        <p>Ингридиенты: {restaurants[2].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[2].menu[1].name}"</p>
        <p>Стоимость: {restaurants[2].menu[1].price}</p>
        <p>Ингридиенты: {restaurants[2].menu[1].ingredients[0]}, {restaurants[0].menu[1].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[2].menu[2].name}"</p>
        <p>Стоимость: {restaurants[2].menu[2].price}</p>
        <p>Ингридиенты: {restaurants[2].menu[2].ingredients[0]}, {restaurants[0].menu[2].ingredients[1]}</p>
          </li>      
    </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>
      <p>Рейтинг(0-5): {restaurants[2].reviews[0].rating} ⭐</p>
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
        <p>Стоимость: {restaurants[3].menu[0].price}</p>
        <p>Ингридиенты: {restaurants[3].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]}</p>
          </li>
          <li>
        <p>Наименование блюда: "{restaurants[3].menu[1].name}"</p>
        <p>Стоимость: {restaurants[3].menu[1].price}</p>
        <p>Ингридиенты: {restaurants[3].menu[1].ingredients[0]}, {restaurants[0].menu[1].ingredients[1]}</p>
          </li>
          </ul>
      </div>
      <h3>Отзывы 🖋 </h3>
      <ul>
        <li>
      <p>Рейтинг(0-5): {restaurants[3].reviews[0].rating} ⭐</p>
      <p>Отзыв: "{restaurants[3].reviews[0].text}"</p>
      <p>Автор отзыва: {restaurants[0].reviews[0].user}</p>
      </li>
      <li>
      <p>Рейтинг(0-5): {restaurants[3].reviews[1].rating} ⭐</p>
      <p>Отзыв: "{restaurants[3].reviews[1].text}"</p>
      <p>Автор отзыва: {restaurants[3].reviews[1].user}</p>
      </li>         
      </ul>
      </div>

</div>
      );