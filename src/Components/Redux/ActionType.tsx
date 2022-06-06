import axios from "axios";

export const ActionType = {
  GET_USER: "GET_USER",
  POST_USER: "POST_USER",
  PUT_USER: "PUT_USER",
  DELETE_USER: "DELETE_USER",
};

export const GET_USER = () => {
  return async (dispatch:any) => {
    await axios
      .get(`http://localhost:3006/users`)
      .then((res) => {
        console.log(res.data, "GetuserApi");
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
export const POST_USER = (data: any) => {
  return async (dispatch: any) => {
    await axios
      .post("http://localhost:3006/users", data)
      .then((res) => {
        console.log(res, "postApi");
        dispatch({
          type: ActionType.POST_USER,
          data: res.data,
        });
        console.log(dispatch, "Postdispatch");
      })
      .catch((error) => {
        console.log(error, "postApiError");
      });
  };
};
export const DELETE_USER =(data:any)=>{
    return async(dispatch:any)=>{
        await axios.delete(`http://localhost:3006/users/${data}`)
        .then((res)=>{
            console.log(res,"deleteAPi")
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
export const PUT_USER =(id: any,data:any)=>{
    return async(dispatch:any)=>{
        await axios.put(`http://localhost:3006/users/${id}`,data)
        .then((res)=>{
            console.log(res.data,"EDITAPI")
            dispatch({
              type:ActionType.PUT_USER,
              payload:res
            })
        })
        .catch((error)=>{
            console.log(error,"EDIT_ApiError")
        })
    }
}

