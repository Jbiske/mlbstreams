import React from "react";



const Canes = () => {
    return(
        <div>
      <h1> Carolina Hockey </h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/nhl/carolina-hurricanes-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstreams.me/nhl/carolina-hurricanes-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Canes;