import React from "react";

const Data = ({ Status, By, Menu, Detail,Color }) => {
    return (
        <div class='row'>

            <div class="col-3 py-3 m-auto">
                {Status}
                
            </div>
            <div class="col-3 py-3 m-auto">
                {By}
            </div>
            <div class="col-3 py-3 m-auto">
                {Menu}
            </div>
            <div class="col-3 py-3 m-auto">
                {Detail}
            </div>
        </div>
    );
};

export default Data;