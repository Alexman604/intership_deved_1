import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { createContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./normalize.scss"
import "./index.scss";

import data from "./data.json"
//get mocked data
const dataId = data.map(article =>{ article.id = uuid(); return article})
//add id to each article and save in context
export const Context = createContext(dataId);


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={dataId} >
        <App />
      </Context.Provider>
    </BrowserRouter>

  </React.StrictMode>
);


