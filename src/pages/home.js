import React from "react";
import './home.css';


function Home() {
  return (
    
    <div className="App">
      <h1>Pick a stream </h1>
 <div class="container">

		<a href='/detroit' class="box-1" >Detroit Tigers</a>
		<a href='/boston'  class="box-2" >Boston Red Sox</a>
	</div>

    </div>
    
  );
}

export default Home;
