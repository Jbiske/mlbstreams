import React from "react";



const Baltimore = () => {
    return(
        <div>
      <h1>Baltimore Birds</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/mlb/baltimore-orioles-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/mlb/baltimore-orioles-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Baltimore;