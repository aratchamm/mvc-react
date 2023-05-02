import React, { useState, useEffect } from "react";


const Data = ({ Status, By, Menu, Detail, Tel }) => {
  const StatusColor = {
    รอยืนยัน: '#8D8D8D',
    ยืนยันแล้ว: 'green',
    ยกเลิกแล้ว: 'red'
  }
  
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupCancel, setShowPopupCancel] = useState(false);
  const [showButtons, setShowButtons] = useState(Status === "รอยืนยัน");
  const [cancelText, setCancelText] = useState("ยกเลิก");
  const [confirmText, setConfirmText] = useState("ยืนยัน");
  const [statusColor, setStatusColor] = useState(StatusColor[Status]);
  const [statusText, setStatusText] = useState(Status);

  function handleCancel() {
    setShowButtons(false);
    setStatusText("ยกเลิกแล้ว");
    setStatusColor("red");
    setShowPopupCancel(!showPopupCancel);
  }

  function handleConfirm() {
    setShowButtons(false);
    setStatusText("ยืนยันแล้ว");
    setStatusColor("green");
    togglePopup_Confirm();
  }

  const togglePopup_cencel = () => {
    setShowPopupCancel(!showPopupCancel);
  }

  const togglePopup_Confirm = () => {
    setShowPopupConfirm(!showPopupConfirm);
  }

  useEffect(() => {
    if (showPopupConfirm) {
      const timer = setTimeout(() => {
        setShowPopupConfirm(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopupConfirm]);

  return (
    <div className="row">
      <div style={{ color: statusColor }} className="col-3 py-3 m-auto">
        {statusText}
        {showButtons && (
          <div className="py-3" id="confirmBUTTON">
            <div style={{ display: "flex" }}>
              <button
                onClick={handleConfirm}
                className="col-12 col-md-6 col-lg-3"
                style={{
                  borderRadius: "20px",
                  marginRight: "5px",
                  backgroundColor: "green",
                  color: "white",
                  border: "0px",
                }}
              >
                {confirmText}
              </button>
              <br></br>
              <button
                onClick={togglePopup_cencel} 
                className="col-12 col-md-6 col-lg-3"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  color: "#6F6F6F",
                  borderColor: "#6F6F6F",
                }}
              >
                {cancelText}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="col-3 py-3 m-auto">
        <div>{By}</div>
        <div className="pt-1">
          {Tel.substring(0, 3)}-{Tel.substring(3, 6)}-{Tel.substring(6, 10)}
        </div>
      </div>
      <div className="col-3 py-3 m-auto">{Menu}</div>
      <div className="col-3 py-3 m-auto">{Detail}</div>

       {showPopupConfirm && (

                <div id="popup4" class="overlay">
                    <div class="popup4 h1 text-center">
                    <i class="fa-solid fa-circle-check" style={{color: 'green'}}></i>
                        <div class="h4 py-4"><b>คุณได้ทำการสั่งอาหารเรียบร้อยเเล้วค่ะ</b></div>
                    </div>
                </div>
            )}

{showPopupCancel && (

<div id="popup3" class="overlay">
    <div class="popup3">
        <a class="close my-1 mx-2" onClick={togglePopup_cencel}><img border="0" alt="" src="https://sv1.picz.in.th/images/2023/04/28/ygp9r1.png"></img></a>
        <div class="h2 py-2"><b>คุณต้องการที่จะยกเลิกใช่หรือไม่?</b></div>
        <div class="content">
            <div class="row">
                <div class="col-6 mt-3">
                    <input style={{backgroundColor: '#ff000d'}} onClick={handleCancel}  class="button1 h4 p-3" type="submit" value="ใช่"></input>
                </div>

                <div class="col-6 mt-3">
                    <input style={{backgroundColor: '#8E8E8E'}} onClick={togglePopup_cencel} class=" button1 h4 p-3" type="submit" value="ไม่"></input>
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
