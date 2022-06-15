import axios from "axios";
import TokenService from '../TokenService/TokenService';
import {Dispatch} from "redux";

export const ActionType = {
  GET_USER: "GET_USER",
  POST_USER: "POST_USER",
  PUT_USER: "PUT_USER",
  DELETE_USER: "DELETE_USER",
  POST_LOGUSER:"POST_LOGUSER",
  POST_SIGNUSER:"POST_SIGNUSER"
};


export const GET_USER = () => {
  return async (dispatch:Dispatch) => {
    await axios
      .get(`http://localhost:3002/Data`)
      .then((res) => {
        console.log(res.data.item, "GetuserApi");
        dispatch({
          type:ActionType.GET_USER,
          data:res.data
        })
      })
      .catch((error) => {
        console.log(error, "getapiError");
      });
  };
};

export const DELETE_USER =(data:any)=>{
  console.log(data,"deletedispatch")
    return async(dispatch:Dispatch)=>{

        await axios.delete(`http://localhost:3002/Data/${data}`)
        .then((res)=>{
            console.log(res,"deleteAPiIn DELETE_USER")
            dispatch({
              type:ActionType.DELETE_USER,
              payload: res.data,
            })
            
            })
        .catch((error)=>{
            console.log(error,"deleteApiError")
        })
      }
}
export const PUT_USER =(id:any,Data:any)=>{
  console.log(id,Data,"id and data editt")
  
    return async(dispatch:Dispatch)=>{
        await axios.put(`http://localhost:3002/Data/${id}`,Data)
        .then((res)=>{
            console.log(res,"EDITAPIDATAA")
            dispatch({
              type:ActionType.PUT_USER,
              payload:res.data
            })
        })
        .catch((error)=>{
            console.log(error,"EDITDATA_ApiError")
        })
    }
}

export const POST_SIGNUSER = (data: any) => {
  return async (dispatch: Dispatch) => {
          console.log(typeof dispatch,"hfqoiyiofwyqpiyfqw")

    await axios
      .post("http://localhost:3002/signup", data)
      .then((res) => {
        TokenService.AccessToken(res.data.Token)

        dispatch({
          type: ActionType.POST_USER,
          data: res.data.item,
        });
      })
      .catch((error) => {
        console.log(error, "postApiError");
      });
  };
};
export const POST_LOGUSER = (data: any) => {
  console.log("888888",data)
  return async (dispatch: Dispatch) => {
    await axios
      .post("http://localhost:3002/login",data)
      .then((res) => {
        console.log("resssss",res)
        TokenService.AccessToken(res.data.Token)
        TokenService.RefreshToken(res.data.Token)
        dispatch({
          type: ActionType.POST_USER,
          data: res.data.item,
        });
      })
      .catch((error) => {
        console.log(error, "postApiError");
      });
  };
};