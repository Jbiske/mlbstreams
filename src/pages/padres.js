import React from "react";



const Padres = () => {
    return(
        <div>
      <h1> Padres</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/san-diego-padres-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/san-diego-padres-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Padres;