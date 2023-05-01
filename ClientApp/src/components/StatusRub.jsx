import React, { useState } from "react";


const Data = ({ Status, By, Menu, Detail, Tel }) => {
  const StatusColor = {
    รอยืนยัน: '#8D8D8D',
    ยืนยันแล้ว: 'green',
    ยกเลิกแล้ว: 'red'
  }

  const [showButtons, setShowButtons] = useState(Status === "รอยืนยัน");
  const [cancelText, setCancelText] = useState("ยกเลิก");
  const [confirmText, setConfirmText] = useState("ยืนยัน");
  const [statusColor, setStatusColor] = useState(StatusColor[Status]);
  const [statusText, setStatusText] = useState(Status);

  function handleCancel() {
    setShowButtons(false);
    setStatusText("ยกเลิกแล้ว");
    setStatusColor("red");
  }


  function handleConfirm() {
    setShowButtons(false);
    setStatusText("ยืนยันแล้ว");
    setStatusColor("green");
  }

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
                onClick={handleCancel}
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
    </div>
  );
};

export default Data;
