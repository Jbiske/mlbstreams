import React from "react";



const Jays = () => {
    return(
        <div>
      <h1>Toronto Blue Jays</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/toronto-blue-jays-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/toronto-blue-jays-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Jays;