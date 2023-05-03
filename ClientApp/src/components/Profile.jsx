import React from "react";

const Data = ({ imgSrc, name, tel }) => {
  return (
    <div className="Info">
      
              <img id="profileIMG" src={imgSrc}></img>
              <br /><br />
                <p>
                  <div className="h3 p-2"><b>{name}</b></div>
                  <div className="h4 p-2">{tel.slice(0,3)}-{tel.slice(3,6)}-{tel.slice(6,10)}</div>
                </p>
    </div>
  );
};

export default Data;
