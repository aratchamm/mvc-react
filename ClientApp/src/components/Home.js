import React, { Component,useEffect,useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link,useNavigate } from 'react-router-dom';
import Profile from "./Profile";


import Card from "./Card";
import DataCard from "./DataCard";

import RubFak from "./Fak";
import DataRubFak from "./DataFak";

import Rub from "./Rub";
import DataRub from "./DataRub";

import axios from 'axios'


function Home(){
  const token=localStorage.getItem("token"); 
  const [showPopup, SetShowPopup] = useState(false);
  const [currentCountNum,SetcurrentCountNum] = useState(0);
  const [currentCountTime,SetcurrentCountTime] = useState(0);
  const [userProfile, setUserProfile] = useState({
    id:"",
    username:"",
    password:"",
    phone:"",
    profileImgIndex: 0
  });
  const navigate = useNavigate();

  const urlList = [
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059101111562250/Screenshot_2023-05-03_034232.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059101363208263/Screenshot_2023-05-03_034032.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059101652623420/Screenshot_2023-05-03_033834.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059101916868688/Screenshot_2023-05-03_033742.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059102197874878/Screenshot_2023-05-03_033557.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059102466318446/Screenshot_2023-05-03_033236.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059102713786398/Screenshot_2023-05-03_032954.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059103011569714/Screenshot_2023-05-03_032459.jpg',
    'https://cdn.discordapp.com/attachments/1093932914468720804/1103059103280013382/Screenshot_2023-05-03_032220.jpg'
  ];

  useEffect(()=>{
    function protectRoute(){
      const token = localStorage.getItem("token");
      if(!token){
        
        return navigate('/login');
      }}
    
    async function fetchProfile(){
        try{
            const res = await axios({
                url: 'https://localhost:7161' + '/api/User/GetUserById',
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                }
            })
            setUserProfile(res.data);
        }
        catch(error){
            console.log("User NotFound");
        }
    }
    fetchProfile();
    protectRoute();

      document.body.classList.add('HOME');

      return () => {
        document.body.classList.remove('HOME');
      }
  },[]);

 function togglePopup() {
    SetShowPopup(!showPopup);
    if(showPopup==true){
      SetcurrentCountNum(0);
      SetcurrentCountTime(0);
    }
  };


  function incrementCounterNum() {
    SetcurrentCountNum(currentCountNum+1);
  }

  function decrementCounterNum() {
    if (currentCountNum > 0) {
      SetcurrentCountNum(currentCountNum-1);
    };
  }

  function increaseTime() {
    SetcurrentCountTime(currentCountTime+1);
  }

  function decreaseTime() {
    if (currentCountTime > 0) {
      SetcurrentCountTime(currentCountTime-1);
    };
  }


    return (
      <div id="content" className="container-fluid">

        <div className="row">
          <div className="col-12 col-sm-3 col-xs-3 col-lg-2  mt-5 text-center" id="navLeft">
              <Profile imgSrc={urlList[userProfile.profileImgIndex]} name={userProfile.username} tel={userProfile.phone} />
            <br />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} id="HomeButton" className="text-dark" to="/Home"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png" alt='iconHome'></img><b>Home</b></h3></NavLink>
              </NavItem>
              <NavItem>
                <div className="opacity-50"><NavLink tag={Link} id="StatusButton" to="/Status"><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png" alt='iconStatus'></img><b>Status</b></h3></NavLink></div>
              </NavItem>
            </ul>


          </div>
          <div className="col-12 col-sm-6 col-lg-8" id="navCenter">
            {DataCard.map((data) => (
              <Card key={data.id} imgRiderSrc={data.imgRiderSrc} imgCilentSrc={data.imgCilentSrc} imgCilentSrc2={data.imgCilentSrc2} imgCilentSrc3={data.imgCilentSrc} Header={data.Header} />
            ))}
          </div>

          <div className="col-12 col-sm-3 col-lg-2 text-left" id="navRight">
            <div className="px-2 pb-3 h2"><b>รายการของฉัน</b></div>
            <hr></hr>
            <div id="Fak">
              <div className="row p-1 mt-5 mb-4">
                <div className="col-12 h3 my-auto">
                  ฝากซื้อ
                </div>
              </div>

              {DataRubFak.slice(0, 3).map((data) => (
                <RubFak key={data.id} Status={data.Status} Menu={data.Menu} Color={data.Color} />
              ))}

              <div className="col-12 h6 p-2 my-auto">
                <a href='/Status' id="view"><i>view all >></i></a>
              </div>


            </div>

            <div id="Rub">
              <div className="row p-1 mt-5 mb-4">
                <div className="col-12 h3 m-auto text-left">
                  สั่งซื้อ
                </div>

              </div>

              {DataRub.slice(0, 3).map((data) => (
                <Rub key={data.id} Status={data.Status} Menu={data.Menu} Color={data.Color} />
              ))}

              <div className="col-12 h6 p-2 my-auto">
                <a href='/Status' id="view"><i>view all >></i></a>
              </div>

            </div>

            <div className="mx-auto text-center">
              <button onClick={togglePopup} className="h5 py-3 my-5" id="Get">สร้างรายการสั่งซื้อ</button>
            </div>

          </div>

        </div>


        {showPopup && (

          <div id="popup2" className="overlay">
            <div className="popup2">
              <a className="close m-3" onClick={togglePopup}>
                <img border="0" alt="" src="https://sv1.picz.in.th/images/2023/05/01/yqEb4J.png"></img>
              </a>
              <div className="h2 pt-2 pb-4 "><b>หิวไหม?</b></div>
              <div className="row px-1 text-center">
                <div className="row text-center">

                  <div className="col-2 h4  m-auto">
                    <img src="https://sv1.picz.in.th/images/2023/05/01/yqEkPk.png" ></img>

                  </div>

                  <div className="col-2 h5 m-auto text-center" for="chooseAmount">จำนวน</div>

                  <div className="col-2 h4 ml-5 my-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={decrementCounterNum}>-</button>

                  </div>

                  <div className="col-2 h3 m-auto text-center">
                    {currentCountNum}
                  </div>

                  <div className="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={incrementCounterNum}>+</button>
                  </div>

                  <div className="col-2 h5 m-auto">ชิ้น</div>




                </div>

                <div className="row pt-4 text-center">

                  <div className="col-2 h4  m-auto">
                    <img src="https://sv1.picz.in.th/images/2023/05/01/yqEhKl.png"></img>

                  </div>

                  <div className="col-2 h5 m-auto text-center" for="chooseAmount">เวลา</div>

                  <div className="col-2 h4 ml-5 my-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={decreaseTime}>-</button>

                  </div>

                  <div className="col-2 h3 m-auto text-center">
                    {currentCountTime}
                  </div>

                  <div className="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={increaseTime}>+</button>
                  </div>

                  <div className="col-2 h5 m-auto">
                    <select style={{ borderRadius: '20px', borderWidth: '2px', textAlign: 'center' }} id="chooseTime">
                      <option value="min" selected>นาที</option>
                      <option value="hr">ชั่วโมง</option>
                    </select>
                  </div>






                </div>

              </div>
              <div>
              </div>
              <br></br>
              <div class='h4 p-4 text-center'>
                <input onClick={togglePopup} style={{backgroundColor: '#ff000d'}} id="POST" class="button1 p-3 " type="submit" value="POST" ></input>
              </div>
            </div>
          </div>


        )}




      </div>


    );
}
 export default Home;