import React from "react";

const Data = ({ imgSrc, name, tel }) => {
  return (
    <div class="Info">
      
              <img id="profileIMG" src={imgSrc}></img>
              <br /><br />
                <p>
                  <div class="p-2"><h3><b>{name}</b></h3></div>
                  <div class="p-2"><h4>{tel}</h4></div>
                </p>
    </div>
  );
};

export default Data;
