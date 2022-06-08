import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from './Components/Form/Form';
import Navs from './Components/Nav/Navs';
import Signup from './Components/Signup/Signup';
import Page from './Components/Page/Page';
import Edit from './Components/EditButton/Edit';
import ErrorBoudry from './Components/ErrorBontry/ErrorBoudry';
// import PrivateRouting from "./Components/PrivateRouting/PrivateRouting";


const App = () => {
  return (
    <div>
      <Navs/>
     <BrowserRouter>
     <ErrorBoudry>
     <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/Form' element={<Form/>}/>
     <Route path='/Edit/:id' element={<Edit/>}/>
     <Route path='/Page' element={
      //  <PrivateRouting>
         <Page/>
      //  </PrivateRouting>
     }/>
     </Routes>        
     </ErrorBoudry>
     </BrowserRouter>

     
   
    </div>
  )
}

export default App