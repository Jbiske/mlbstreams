import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detroit from './pages/detroit'
import Boston from './pages/boston'
import Yankee from './pages/yankee'
import Pittsburg from "./pages/pittsburg";
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
   
  <Route path='/yankees' element={<Yankee></Yankee>} >

</Route>
   
<Route path='/pittsburg' element={<Pittsburg></Pittsburg>} >

</Route>

    </Routes>
  

    </div>
    </Router>
    
  );
}

export default App;
