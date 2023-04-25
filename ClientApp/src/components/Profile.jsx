import React from "react";

const Data = ({ imgSrc, name, tel }) => {
  return (
    <div class="Info">
      
              <img id="profileIMG" src={imgSrc}></img>
              <br /><br />
                <p>
                <div class="p-1"><span id="editInfo"><span class="material-symbols-outlined">edit</span> edit</span><br /></div>
                  <div class="p-2"><b>{name}</b></div>
                  <div class="p-2">{tel}</div>
                </p>
    </div>
  );
};

export default Data;
