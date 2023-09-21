import React from "react";
import './boston.css'


const Boston = () => {
    return(
        <div>
      <h1>Boston Red Sox</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/boston-red-sox-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>

      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/mlb/boston-red-sox-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Boston;