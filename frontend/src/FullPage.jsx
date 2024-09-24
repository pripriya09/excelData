import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontFirst from './FrontFirst';
import Home from './Home';


function FullPage() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<FrontFirst/>}/>
    <Route path='Home' element={<Home/>}/>
     {/* <Route path='/' element={<FrontFirst/>}/> */}

  </Routes>
  
  
  </BrowserRouter>
  
  
  </>

  )
}

export default FullPage