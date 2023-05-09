import React from "react";



const Detroit = () => {
    return(
        <div>
            <h1>Detroit Tigers</h1>
            <h2> Broadcast 1 </h2>
            <div className="iframe"> 
      
            <iframe src='https://embedstream.me/detroit-tigers-stream-1'title='Baseball' allowfullscreen allowtransparency></iframe>
            </div>
            <h2> Broadcast 2 </h2>
            <div className="iframe"> 
            <iframe src='https://embedstream.me/detroit-tigers-stream-2'title='Baseball' allowfullscreen allowtransparency></iframe>
            </div>
        </div>
    )
};


export default Detroit;