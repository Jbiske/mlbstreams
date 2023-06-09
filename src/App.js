import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detroit from './pages/detroit'
import Boston from './pages/boston'
import Yankee from './pages/yankee'
import Pittsburg from "./pages/pittsburg";
import './App.css';
import Nav from "./pages/Navbar";
import Twins from "./pages/twins";
import Texas from './pages/texas'
import Arizona from './pages/arizona'
import Royals  from "./pages/royals";
import Indians from './pages/Indians'
import Baltimore from "./pages/baltimore";
import Whites from "./pages/white";
import Rays from "./pages/rays";
import Jays from "./pages/jays";
import Braves from "./pages/braves";

function App() {
  return (
    <Router >
       <div>
       <Nav/>
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
<Route path='/twins' element={<Twins></Twins>} >

</Route>
<Route path='/texas' element={<Texas></Texas>} >

</Route>
<Route path='/arizona' element={<Arizona></Arizona>} >

</Route>
<Route path='/royals' element={<Royals></Royals>} >

</Route>
<Route path='/indians' element={<Indians></Indians>} >

</Route>
<Route path='/baltimore' element={<Baltimore></Baltimore>} >

</Route>
<Route path='/white' element={<Whites></Whites>} >

</Route>
<Route path='/rays' element={<Rays></Rays>} >

</Route>
<Route path='/jays' element={<Jays></Jays>} >

</Route>
<Route path='/braves' element={<Braves></Braves>} >

</Route>

    </Routes>
  
  

    </div>

    </Router>
    
  );
}

export default App;
