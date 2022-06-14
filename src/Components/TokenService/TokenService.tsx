
const AccessToken=(user:any)=>{
    console.log("userrrrr",user)
localStorage.setItem("Access",JSON.stringify(user)||"{}");
}
const RefreshToken=(user:any)=>{
    localStorage.setItem("Refresh",JSON.stringify(user)||"{}");
}
const GetAccessToken=()=>{
   return JSON.parse(localStorage.getItem("Access")||"{}");
}
const GetRefreshToken =()=>{
    return JSON.parse(localStorage.getItem("Refresh")||"{}");
}
const UpdateAccessToken=(Token:any)=>{
    let user = JSON.parse(localStorage.getItem("Access")||"{}")
    user = Token
    localStorage.setItem("Access",JSON.stringify(user))
}

const TokenService ={
    AccessToken,
    RefreshToken,
    GetAccessToken,
    GetRefreshToken,
    UpdateAccessToken
}
export default TokenService;