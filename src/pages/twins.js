import React from "react";



const Twins = () => {
    return(
        <div>
      <h1>Minnasota Twins</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/minnasota-twins-stream-1'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/minnasota-twins-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
     
      </div>
        </div>
    )
};


export default Twins;