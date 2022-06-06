import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from './Components/Form/Form';
import Navs from './Components/Nav/Navs';
import Signup from './Components/Signup/Signup';
import Page from './Components/Page/Page';
import Edit from './Components/EditButton/Edit';

const App = () => {
  return (
    <div>
     <Navs/>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/Form' element={<Form/>}/>
     <Route path='/Page' element={<Page/>}/>
     <Route path='/Edit/:id' element={<Edit/>}/>
     </Routes>        
     </BrowserRouter>
    </div>
  )
}

export default App