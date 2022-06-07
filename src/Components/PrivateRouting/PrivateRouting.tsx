import React from "react";
import { Navigate} from "react-router";

 const PrivateRouting =(children:any)=>{
    
    const auth= localStorage.getItem('Sign');
    console.log(auth,"Private routing")
    return ( auth?  children:<Navigate to="/Form"/>)

        
 }
export default PrivateRouting