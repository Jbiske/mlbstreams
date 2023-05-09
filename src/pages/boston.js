import React from "react";
import './boston.css'


const Boston = () => {
    return(
        <div>
      <h1>Boston Red Sox</h1>
      <div className="iframe">
      <iframe src='https://embedstream.me/boston-red-sox-stream-1' allowfullscreen allowtransparency></iframe>
     
      </div>
      <div className="iframe">
      <iframe src='https://embedstream.me/boston-red-sox-stream-2' allowfullscreen allowtransparency></iframe>
     
      </div>
        </div>
    )
};


export default Boston;