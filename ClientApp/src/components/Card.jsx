import React, { useState } from "react";
import axios from "axios";

const Data = ({cardId ,imgCilentSrc, imgCilentSrc2, imgCilentSrc3, Header, imgRiderSrc ,limit ,Hour ,Minute}) => {

  const [orderInfo, setOrderInfo] = useState({
    foodName:"",
    note:""
  });
  const [showPopup, setShowPopup] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const token = localStorage.getItem('token');

  async function CreateOrderHandler(){
    if(currentCount==0 || orderInfo.foodName == "" ){
      console.log("Please Enter Required Info");
    }
    else{
      try{
        const res = await axios({
          url:'https://localhost:7161/api/Order/CreateOrder',
          method:'POST',
          data:{
            PostId:cardId,
            FoodName:orderInfo.foodName,
            Note:orderInfo.note,
            Count:currentCount
          },
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        console.log("Create Order Success");
        togglePopup();
      }
      catch{
        console.log("Cannot Create Your Order");
      }
      
    }
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setCurrentCount(0);
    setOrderInfo({
      foodName:"",
      note:""
    });
  }

  const incrementCounter = () => {
    setCurrentCount(currentCount + 1);
  }

  const decrementCounter = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
    
  }

  return (
    <div id="compo" className="container mb-5">
      <img
        className="picCom"
        src={imgRiderSrc}
      ></img>
      <div className="p-2 text-center">
        <h3>{Header}</h3>
        <h3>{limit}</h3>
        <h3>{Hour} : {Minute}</h3>
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {/* Render the first profile picture if available */}
            {imgCilentSrc && (
              <img className="photoCol" src={imgCilentSrc} alt="profile pic" />
            )}
            {/* Render the second profile picture if available */}
            {imgCilentSrc2 && (
              <img className="photoCol" src={imgCilentSrc2} alt="profile pic" />
            )}
            {/* Add a placeholder image if there are more than 2 profile pictures */}
            {imgCilentSrc3 && (
              <img
                className="photoCol"
                src="https://sv1.picz.in.th/images/2023/04/24/ykJ4XJ.png"
                alt="profile pic"
              />
            )}
          </div>

          <div className="col-4">
            <img style={{cursor: 'pointer'}} onClick={togglePopup}
              className="plus"
              src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"
            ></img>
          </div>

        </div>
      </div>


      {showPopup && (

<div id="popup1" className="overlay">
            <div className="popup1">
              <img className="imgstyle"
                src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" alt=""></img>
              <a className="close my-1 mx-2" onClick={togglePopup}><img border="0" alt="" src="https://sv1.picz.in.th/images/2023/04/28/ygp9r1.png"></img></a>
              <div style={{margin: '2%'}} className="content">
                <form className="px-5" action="">
                  <p className="h5 p-2 c" for="fname">ชื่ออาหาร</p>
                  <input onChange={(e) => {
                    setOrderInfo({
                        ...orderInfo,
                        foodName:
                            e.target.value,
                    })
                  }} 
                  style={{width: '98%'}} className="p-2 h6 d-block m-auto" type="text" id="fname" name="fname" placeholder=" ตัวอย่าง ข้าวผัดกระเทียม"></input>
                  <p className="h5 px-2 pt-4 pb-2 c" for="note">หมายเหตุ (ถ้ามี)</p>
                  <input onChange={(e) => {
                    setOrderInfo({
                        ...orderInfo,
                        note:
                            e.target.value,
                    })
                  }}  
                  style={{width: '98%'}} className="p-2 h6 d-block m-auto" type="text" id="note" name="note" placeholder=" ตัวอย่าง ไม่ใส่ผัก"></input>
                </form>
                <div className="row pt-4">
                  <div className="col-4 text-center  m-auto">
                    <div className="row">

                      <div className="col-4 h4">
                      <button style={{backgroundColor: 'transparent', color:'#ff0000', borderColor: '#ff0000' }} onClick={decrementCounter}>-</button>
                      
                      </div>

                      <div className="col-4 h3 m-auto text-center">
                      {currentCount}
                      </div>

                      <div className="col-4 h4">
                      <button style={{backgroundColor: 'transparent', color:'#ff0000', borderColor: '#ff0000' }} onClick={incrementCounter}>+</button>
                      </div>

                    

        
        

                    </div>
                    
                  </div>
                  <div className="col-7">
                  <input style={{backgroundColor: '#ff000d'}}  onClick={CreateOrderHandler} className="button1 h4 p-3" type="submit" value="ฝากเลย"></input>
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
