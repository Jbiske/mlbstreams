import React from "react";



const Pittsburg = () => {
    return(
        <div>
      <h1>PissBurgh</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/Pittsburgh-Pirates-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/Pittsburgh-Pirates-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Pittsburg;