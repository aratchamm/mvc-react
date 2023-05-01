import React, { useState } from "react";

const Data = ({ Status, By, Menu, Detail, Tel }) => {

    const [showPopup, setShowPopup] = useState(false);

    const StatusColor = {
        รอยืนยัน: '#8D8D8D',
        ยืนยันแล้ว: 'green',
        ยกเลิกแล้ว: 'red'
    }

    const [showButtons, setShowButtons] = useState(Status === "รอยืนยัน");
    const [cancelText, setCancelText] = useState("ยกเลิกรายการ");
    const [statusColor, setStatusColor] = useState(StatusColor[Status]);

    const togglePopup_cencel = () => {
        setShowPopup(!showPopup);
        setShowButtons(false);
        setStatusText("ยกเลิกแล้ว");
        setStatusColor("red");
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }


    const [statusText, setStatusText] = useState(Status);

    return (
        <div class='row'>
            <div style={{ color: statusColor }} class="col-3 py-3 m-auto">
                {statusText}
                {showButtons ? (
                    <div class='col-sm-12 col-lg-5 col-md-12 py-3' id='confirmBUTTON'>
                        <div style={{ display: "flex" }}>

                            <button onClick={togglePopup} class=' col-sm-12 ' style={{ borderRadius: '20px', backgroundColor: 'transparent', color: '#6F6F6F', borderColor: '#6F6F6F' }}>{cancelText}</button>

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


            {showPopup && (

                <div id="popup3" class="overlay">
                    <div class="popup3">
                        <a class="close my-1 mx-2" onClick={togglePopup}><img border="0" alt="" src="https://sv1.picz.in.th/images/2023/04/28/ygp9r1.png"></img></a>
                        <div class="h2 py-2"><b>คุณต้องการที่จะยกเลิกใช่หรือไม่?</b></div>
                        <div class="content">
                            <div class="row">
                                <div class="col-6 mt-3">
                                    <input style={{backgroundColor: '#ff000d'}} onClick={togglePopup_cencel} href="/Status" class="button1 h4 p-3" type="submit" value="ใช่"></input>
                                </div>

                                <div class="col-6 mt-3">
                                    <input style={{backgroundColor: '#8E8E8E'}} onClick={togglePopup} href="/Status" class=" button1 h4 p-3" type="submit" value="ไม่"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}













        </div>
    );
};

export default Data;
