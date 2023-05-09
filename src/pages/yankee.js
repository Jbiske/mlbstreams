import React from "react";
import './boston.css'


const Yankee = () => {
    return(
        <div>
      <h1>New York Yankees</h1>
      <div className="iframe">
      <iframe src='https://embedstream.me/new-york-yankees-stream-1' title='Baseball' allowfullscreen allowtransparency></iframe>
     
      </div>
      <div className="iframe">
      <iframe src='https://embedstream.me/new-york-yankees-stream-2'title='Baseball' allowfullscreen allowtransparency></iframe>
     
      </div>
        </div>
    )
};


export default Yankee;