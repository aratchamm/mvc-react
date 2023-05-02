import React, { useState } from "react";

const Data = ({ imgCilentSrc, imgCilentSrc2, imgCilentSrc3, Header }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  const incrementCounter = () => {
    setCurrentCount(currentCount + 1);
  }

  const decrementCounter = () => {
    setCurrentCount(currentCount - 1);
  }

  return (
    <div id="compo" className="container mb-5">
      <img
        className="picCom"
        src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"
      ></img>
      <div className="p-2 text-center">
        <h3>{Header}</h3>
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
            <img onClick={togglePopup}
              className="plus"
              src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"
            ></img>
          </div>

        </div>
      </div>


      {showPopup && (

<div id="popup1" class="overlay">
            <div class="popup1">
              <img class="imgstyle"
                src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" alt=""></img>
              <a class="close my-1 mx-2" onClick={togglePopup}><img border="0" alt="" src="https://sv1.picz.in.th/images/2023/04/28/ygp9r1.png"></img></a>
              <div style={{margin: '2%'}} class="content">
                <form class="px-5" action="">
                  <p class="h5 p-2 c" for="fname">ชื่ออาหาร</p>
                  <input style={{width: '98%'}} class="p-2 h6 d-block m-auto" type="text" id="fname" name="fname" placeholder=" ตัวอย่าง ข้าวผัดกระเทียม"></input>
                  <p class="h5 px-2 pt-4 pb-2 c" for="note">หมายเหตุ (ถ้ามี)</p>
                  <input style={{width: '98%'}} class="p-2 h6 d-block m-auto" type="text" id="note" name="note" placeholder=" ตัวอย่าง ไม่ใส่ผัก"></input>
                </form>
                <div class="row pt-4">
                  <div class="col-4 text-center  m-auto">
                    <div class="row">

                      <div class="col-4 h4">
                      <button style={{backgroundColor: 'transparent', color:'#ff0000', borderColor: '#ff0000' }} onClick={decrementCounter}>-</button>
                      
                      </div>

                      <div class="col-4 h3 m-auto text-center">
                      {currentCount}
                      </div>

                      <div class="col-4 h4">
                      <button style={{backgroundColor: 'transparent', color:'#ff0000', borderColor: '#ff0000' }} onClick={incrementCounter}>+</button>
                      </div>

                    

        
        

                    </div>
                    
                  </div>
                  <div class="col-7">
                  <input style={{backgroundColor: '#ff000d'}}  class="button1 h4 p-3" type="submit" value="ฝากเลย"></input>
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
