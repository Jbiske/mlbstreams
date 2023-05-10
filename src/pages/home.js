import React from "react";
import './home.css';


function Home() {
  return (
    
    <div className="app">
      <h1>Adless MLB Streams </h1>
 <div class="container">

		<a href='/detroit' class="box-1" >Detroit Tigers</a>
		<a href='/boston'  class="box-2" >Boston Red Sox</a>
        <a href='/yankees'  class="box-3" >New York Yankees</a>
	</div>

  <div class="container">

		<a href='/texas' class="box-4" >Texas Rangers</a>
		<a href='/pittsburg'  class="box-5" >Pittsburgh Pirates</a>
        <a href='/arizona'  class="box-6" >Arizona Diamondbacks</a>
	</div>
  <div class="container">

<a href='/twins' class="box-1" >Minasota Twins</a>

</div>


    </div>
    
  );
}

export default Home;
