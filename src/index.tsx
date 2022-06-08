import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from "../src/Components/Redux/Store"
import axios from "axios";
import TokenService from './Components/TokenService/TokenService';


// Request from Interceptor 
axios.interceptors.request.use((request: any) => {
  console.log(request, "====>Meet interseptor")
  const Token = TokenService.GetAccessToken()
  console.log(Token, "GetAccessToken from interceptor")
  request.headers = {
    "message": "Success to meet",
    "x-access-token": Token,
    "Content-Type": "application/json",
  }
  return request
})

// // Response from InterCeptors
axios.interceptors.response.use(

  (response: any) => {
    console.log(response, "Interceptor give response");
    return response
  },
  async (error) => {
    console.log(error, "Error from interceptor response")

    if (error.response.status === 401) {
      console.log(error.response.status, "Error comes from after 1 min 401 error");

      if (error.response.data.message) {
        try {
          let refresh = TokenService.GetRefreshToken();
          console.log(refresh, "1hr Refresh token got");
          const RefreshToken = await axios.post(`http://localhost:3002/refresh`, {
            "x-access-token": refresh,
            "content-type": "application/json",
          });
          console.log(RefreshToken, "RefreshToken  got");
          //console.log("refresh api called", response.data.Token);
          //TokenService.UpdateAccessToken(response.data.status.Token);
          // axios.defaults.headers.common["x-access-token"] = response.data.data.Token;
        }
        catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
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
