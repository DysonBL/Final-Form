import { Navigate} from "react-router";

 const PrivateRouting =({children})=>{
    
    const auth= localStorage.getItem('Sign');
    return  auth?  children:<Navigate to="/"/>

        
 }
export default PrivateRouting