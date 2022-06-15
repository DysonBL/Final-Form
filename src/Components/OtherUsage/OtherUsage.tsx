//get local data

// useEffect(() => {
//   let Data = JSON.parse(localStorage.getItem("Sign") || "{}");
//   // let newDatas = JSON.parse(Data);
//   console.log(Data, "User");
//   setState(Data);
// }, []);

//delete local data
//(e:any)   e- get click element  all details
// let Data = JSON.parse(localStorage.getItem("Sign") || "{}");
// let userData = Data?.filter((item: any) => item.Name !== e.Name);
// localStorage.setItem("Sign", JSON.stringify(userData));
// setState(userData);

// let localdata = localStorage.getItem('Sign');

// if (localdata) {
//   let local = JSON.parse(localdata);
//   local.push(Data);
//   localStorage.setItem('Sign', JSON.stringify(local));
// } else {
//   localStorage.setItem('Sign', JSON.stringify([Data]));
// }
// const form = e.currentTarget;
// if (form.checkValidity() === false) {
//   e.preventDefault();
//   e.stopPropagation();
// }
/*
if(Data.Name !== "" && Data.Email!=="" &&Data.password!==""&& Data.Age!=="" && Data.checkbox!==""){
 navigate("/Form");
}
 navigate("/Form");
*/
/*
inside useCalback

  const addNewUser = useCallback(
async (Data: any)=>{
try{
  dispatch(POST_USER(Data))
}catch(err){

}
  },[dispatch]
  )
addNewUser(Data);
*/
/*
export const POST_USER = (Data:any) => {
    return async (dispatch:any) => {
      const apiURL ="http://localhost:3006/users"
        try{
      const postResponse = await axios.post(apiURL,Data).then((response) => {
        if (response) {
            return response.data;
          } else {
            return false;
          }
        });
        if (postResponse) {
          dispatch({ type: POST_USER, data: postResponse });
        }
      } catch (error) {
        console.log(error);
      }
    };
}
*/
   /* {auth ? <PrivateRoute/> : <Public/>} */
