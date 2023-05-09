import React from "react";
import './boston.css'


const Yankee = () => {
    return(
        <div>
      <h1>New York Yankees</h1>
      <h2> Broadcast 1 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/new-york-yankees-stream-1' title='Baseball' scrolling='no' allowfullscreen allowtransparency></iframe>
     
      </div>
      <h2> Broadcast 2 </h2>
      <div className="iframe">
      <iframe src='https://embedstream.me/new-york-yankees-stream-2'title='Baseball' scrolling='no' allowfullscreen allowtransparency></iframe>
     
      </div>
        </div>
    )
};


export default Yankee;