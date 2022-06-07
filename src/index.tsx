import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {Store} from "../src/Components/Redux/Store"
import axios from "axios";
import TokenService from './Components/TokenService/TokenService';


// Request from Interceptor 
axios.interceptors.request.use((request:any)=>{
  console.log(request,"====>Meet interseptor")
  const Token = TokenService.GetAccessToken()
  console.log(Token,"GetAccessToken")
  request.headers={
    "x-access-token": Token,
    "Content-Type": "application/json",
  }
  return request
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
