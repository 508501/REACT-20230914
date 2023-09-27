import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from "./constants/mock"
import { MainPage } from './pages/Main/component';


const rootElement = document.getElementById ("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <MainPage />
      );