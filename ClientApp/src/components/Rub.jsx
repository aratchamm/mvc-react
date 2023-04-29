import React from "react";

const Data = ({ Status, Menu,Color }) => {
  return (
    <div class="row p-1">
      <div style={{color:Color}} class="col-5 h6 text-left">
        {Status}
      </div>
      <div class="col-7 h6 text-left">
        {Menu}
      </div>
    </div>
  );
};

export default Data;