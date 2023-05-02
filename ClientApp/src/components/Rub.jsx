import React from "react";

const Data = ({ Status, Menu,Color }) => {
  return (
    <div className="row p-1">
      <div style={{color:Color}} className="col-5 h6 text-left">
        {Status}
      </div>
      <div className="col-7 h6 text-left">
        {Menu}
      </div>
    </div>
  );
};

export default Data;