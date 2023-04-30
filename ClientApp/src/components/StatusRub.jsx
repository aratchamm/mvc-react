import React from "react";

const Data = ({ Status, By, Menu, Detail, Color }) => {
    return (
        <div class='row'>

            <div style={{color:Color}} class="col-3 py-3 m-auto">
                {Status}
                {Status === "รอการยืนยัน" ? (
                <div class='py-3' id='confirmBUTTON'>
                        <div style={{ display: "flex" }}>
                            <button class='col-3' style={{ borderRadius: '20px', marginRight: '5px', backgroundColor: 'green', color: 'white', border: '0px' }}>ยืนยัน </button>

                            <button class='col-3 ' style={{ borderRadius: '20px', marginRight: '5px', backgroundColor: 'transparent' , color: 'muted', borderColor: '#787878' }}> ยกเลิก </button>
                        </div>
                        </div>
                    ) : (
                        <></>
                    )
                    }




                
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