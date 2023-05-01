import React, { useState } from "react";

const Data = ({ Status, By, Menu, Detail, Tel }) => {

    const StatusColor = {
        รอยืนยัน: '#8D8D8D',
        ยืนยันแล้ว: 'green',
        ยกเลิกแล้ว: 'red'
    }

    const [showButtons, setShowButtons] = useState(Status === "รอยืนยัน");
    const [cancelText, setCancelText] = useState("ยกเลิกรายการ");
    const [statusColor, setStatusColor] = useState(StatusColor[Status]);

    function handleCancel() {
        setShowButtons(false);
        setStatusText("ยกเลิกแล้ว");
        setStatusColor("red");
    }



    const [statusText, setStatusText] = useState(Status);

    return (
        <div class='row'>
            <div style={{ color: statusColor }} class="col-3 py-3 m-auto">
                {statusText}
                {showButtons ? (
                    <div class='col-sm-12 col-lg-5 col-md-12 py-3' id='confirmBUTTON'>
                        <div style={{ display: "flex" }}>

                            <button onClick={handleCancel} class=' col-sm-12 ' style={{ borderRadius: '20px', backgroundColor: 'transparent', color: '#6F6F6F', borderColor: '#6F6F6F' }}>{cancelText}</button>

                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div class="col-3 py-3 m-auto">
                <div>{By}</div>
                <div class='pt-1'>{Tel.substring(0, 3)}-{Tel.substring(3, 6)}-{Tel.substring(6, 10)}</div>
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
