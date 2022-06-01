import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from './Components/Form/Form';
import Navs from './Components/Nav/Navs';
import Signup from './Components/Signup/Signup';
import PrivateRouting from './Components/PrivateRouting/PrivateRouting';
import Home from './Components/Home/Home';
import Page from './Components/Home/Page';

const App = () => {
  return (
    <>
    <Navs/>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/Form' element={<Form/>}/>
     <Route path='/Page' element={<Page/>}/>
     <Route path='/Home' element={<Home/>}/>
     </Routes>   
     <PrivateRouting>
     {/* <Home/> */}
     </PrivateRouting> 
     
     </BrowserRouter>
    </>
  )
}

export default App