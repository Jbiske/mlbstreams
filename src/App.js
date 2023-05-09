import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detroit from './pages/detroit'
import Boston from './pages/boston'
import './App.css';


function App() {
  return (
    <Router >
       <div>
  <Routes>
  
 <Route path='/' element={<Home></Home>} >

    </Route>


    <Route path='/detroit' element={<Detroit></Detroit>} >
   
  </Route>
   
  <Route path='/boston' element={<Boston></Boston>} >

  </Route>
   


    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
