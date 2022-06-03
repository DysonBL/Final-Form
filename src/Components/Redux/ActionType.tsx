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
      .get("http://localhost:3006/users")
      .then((res) => {
        console.log(res.data, "GetuserApi");
        dispatch(res.data)
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
          payload: res.data,
        });
        console.log(dispatch, "Postdispatch");
      })
      .catch((error) => {
        console.log(error, "postApiError");
      });
  };
};
export const DELETE_USER =()=>{
    return async()=>{
        await axios.delete("http://localhost:3006/users")
        .then((res)=>{
            console.log(res.data,"deleteAPi")
        })
        .catch((error)=>{
            console.log(error,"deleteApiError")
        })
    }
}
export const PUT_USER =()=>{
    return async()=>{
        await axios.put("http://localhost:3006/users")
        .then((res)=>{
            console.log(res.data,"deleteAPi")
        })
        .catch((error)=>{
            console.log(error,"deleteApiError")
        })
    }
}