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
import Cards from "./pages/cards";
import Cubs from "./pages/cubs";
import Brews from "./pages/brews";
import Reds from "./pages/reds";
import Nats from "./pages/nats";
import Philly from "./pages/philly";
import Mets from "./pages/mets";
import Marlins from "./pages/marlins";
import Astros from "./pages/astros";
import Padres from "./pages/padres";
import Mariners from "./pages/mariners";
import Dodgers from "./pages/dodgers";
import Rockies from "./pages/rockies";
import A from "./pages/as";
import Angels from "./pages/angels";
import Giants from "./pages/giants";
import Lions from "./pages/lions";
import Pats from "./pages/pats";
import NYG from "./pages/nyg";
import Wings from "./pages/wings";



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
<Route path='/cubs' element={<Cubs/>} >

</Route>
<Route path='/brews' element={<Brews/>} >

</Route>
<Route path='/reds' element={<Reds/>} >

</Route>
<Route path='/cards' element={<Cards/>} >

</Route>
<Route path='/nats' element={<Nats/>} >

</Route>
<Route path='/philly' element={<Philly/>} >

</Route>
<Route path='/mets' element={<Mets/>} >
</Route>
<Route path='/marlins' element={<Marlins/>} >

</Route>


<Route path='/padres' element={<Padres/>} >

</Route>


<Route path='/astros' element={<Astros/>} >

</Route>




<Route path='/rockies' element={<Rockies/>} >


</Route>



<Route path='/dodgers' element={<Dodgers/>} >

</Route>

<Route path='/giants' element={<Giants/>} >


</Route>



<Route path='/seattle' element={<Mariners/>} >

</Route>


<Route path='/angels' element={<Angels/>} >

</Route>

<Route path='/As' element={<A/>} >

</Route>
<Route path='/lions' element={<Lions/>} >

</Route>
<Route path='/pats' element={<Pats/>} >

</Route>
<Route path='/nyg' element={<NYG/>} >

</Route>
<Route path='/wings' element={<Wings/>} >

</Route>
    </Routes>
   
  
  

    </div>

    </Router>
    
  );
}

export default App;
