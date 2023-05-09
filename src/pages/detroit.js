import React from "react";
import './boston.css'


const Detroit = () => {
    return(
        <div>
            <h1>Detroit Tigers</h1>
            <h2> Broadcast 1 </h2>
            <div className="iframe"> 
      
            <iframe src='https://embedstream.me/detroit-tigers-stream-1'title='Baseball'scrolling='no' allowFullScreen  ></iframe>
            </div>
            <h2> Broadcast 2 </h2>
            <div className="iframe"> 
            <iframe src='https://embedstream.me/detroit-tigers-stream-2'title='Baseball' scrolling='no'allowFullScreen ></iframe>
            </div>
        </div>
    )
};


export default Detroit;