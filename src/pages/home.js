import React from "react";
import './home.css';


function Home() {
  return (
    
    <div className="app">

      AL Central
 <div class="container"> 

		<a href='/detroit' class="box-1" >Detroit Tigers</a>
    <a href='/royals' class="box-8" >Kansas City Royals</a>
    <a href='/indians' class="box-9" >Cleveland Indians</a>
    <a href='/twins' class="box-7" >Minnesota Twins</a>
    <a href='/white' class="box-11" >Chicago White Soxs</a>
	</div>
  
  NL Central
  <div class="container">
  <a href='/cubs' class="box-17" >Cody Cubs</a>
  <a href='/reds' class="box-18" > Cruz Reds</a>
	<a href='/brews'  class="box-16" > Brew Crew</a>
  <a href='/pittsburg'  class="box-5" >Pittsburgh Pirates</a>
  <a href='/cards'  class="box-15" >Paul Goldy Cards</a>
	</div>


NL EAST
<div class="container">
  <a href='/braves' class="box-14" >Atlanta Braves</a>
  <a href='/marlins' class="box-20" >Maimi Marlins</a>
  <a href='/mets' class="box-21" >New York Jets</a>
  <a href='/nats' class="box-19" >Washington  Nationals</a>
  <a href='/philly' class="box-22" >Phillie Phillie Phillie </a>

	</div>






  AL EAST
  <div class="container">






<a href='/boston'  class="box-2" >Boston Red Sox</a>
<a href='/yankees'  class="box-3" >New York Yankees</a>
<a href='/baltimore' class="box-10" >Baltimore Orioles</a>
<a href='/jays' class="box-13" >Toronto Blue Jays</a>
<a href='/rays' class="box-12" >Tampa Bay Rays</a>
</div>

NL WEST
  <div class="container">
  


        <a href='/arizona'  class="box-6" >Arizona Diamondbacks</a>
        
        <a href='/dodgers'  class="box-23" >LA Dodgers </a>
        
        <a href='/giants'  class="box-24" >San Fran Giants </a>
        
        <a href='/rockies'  class="box-25" >Colorodo Rockies </a>
        
        <a href='/padres'  class="box-26" >Slam Diego  Padres</a>

	</div>
AL WEST
  <div class="container">
  
  <a href='/texas' class="box-4" >Texas Rangers</a>
  <a href='/astros' class="box-27" >Houston Astros</a>
  <a href='/seattle' class="box-28" >Seattle Mariners</a>
  <a href='/angels' class="box-29" >LA Angels</a>
  <a href='/As' class="box-30" >Las Vegas A's</a>

	</div>

</div>


    
  );
}

export default Home;
