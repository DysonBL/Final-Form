import React from 'react'
import {  Routes, Route} from "react-router-dom";
import Form from './Components/Form/Form';
import Navs from './Components/Nav/Navs';
import Signup from './Components/Signup/Signup';
import Page from './Components/Page/Page';
import Edit from './Components/EditButton/Edit';
import ErrorBoudry from './Components/ErrorBontry/ErrorBoudry';
import PrivateRoute from "./Components/PrivateRouting/PrivateRoute";


const App = () => {
  return (
    <div>
      <Navs/>
     
     <ErrorBoudry>
     <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/Form' element={<Form/>}/>
     <Route path='/Edit/:id' element={<Edit/>}/>
     <Route path='/Page' element={
        <PrivateRoute>
       <Page/>
      </PrivateRoute > 
     }/>
     </Routes>        
     </ErrorBoudry>

     
   
    </div>
  )
}

export default App