import React from "react";

const Data = ({ imgSrc, name, tel }) => {
  return (
    <div className="Info">
      
              <img id="profileIMG" src={imgSrc}></img>
              <br /><br />
                <p>
                  <div className="h3 p-2"><b>{name}</b></div>
                  <div className="h4 p-2">{tel}</div>
                </p>
    </div>
  );
};

export default Data;
