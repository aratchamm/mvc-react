import React from "react";

const Data = ({ Status, Menu }) => {
  return (
    <div class="row p-1">
      <div class="col-5 h6 text-left">
        {Status}
      </div>
      <div class="col-7 h6 text-left">
        {Menu}
      </div>
    </div>
  );
};

export default Data;