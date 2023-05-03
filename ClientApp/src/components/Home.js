import React, { Component, useEffect, useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Profile from "./Profile";


import Card from "./Card";
import DataCards from "./DataCard";

import RubFak from "./Fak";
import DataRubFak from "./DataFak";

import Rub from "./Rub";
import DataRub from "./DataRub";

import axios from 'axios'


function Home() {
  const token = localStorage.getItem("token");
  const [showPopup, SetShowPopup] = useState(false);
  const [currentCountNum, SetcurrentCountNum] = useState(0);
  const [currentCountTime, SetcurrentCountTime] = useState(0);
  const [userProfile, setUserProfile] = useState({
    id: "",
    username: "",
    password: "",
    phone: "",
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


  const [DataCard, setDataCard] = useState([]);
  
  const urlListPost = [
    'https://64.media.tumblr.com/baddce02e054e06899f9d7f536f8f00a/tumblr_pyj7knjOHf1we9f2ro1_640.gif',
    'https://data.whicdn.com/images/332497099/original.gif',
    'https://media.tenor.com/TaVgCSSPmqMAAAAC/food-anime.gif',
    'https://64.media.tumblr.com/5036b50ddffa4c6d67a0c19ebd46c601/tumblr_peeixeLjmz1tdnbbbo1_540.gif',
    'https://images-ext-2.discordapp.net/external/lOkGB3BsIYP5431JhQjwvcxrpci8Ndk3voeTCJnuTl0/https/i.pinimg.com/originals/89/99/c8/8999c86a2a2a27eadc787a00b5d20b80.gif',
    'https://i.pinimg.com/originals/26/23/67/262367a0496917855e0ea05c08f9a2c8.gif',
    'https://i.pinimg.com/originals/6f/bd/4c/6fbd4ce17199465731bb2a1feb298b0c.gif',
    'https://i.pinimg.com/originals/6f/bd/4c/6fbd4ce17199465731bb2a1feb298b0c.gif',
    'https://i.pinimg.com/originals/da/a4/92/daa4925e6cfe2cfbcd564a7c24bda66c.gif',
    'https://i.pinimg.com/originals/0b/35/e8/0b35e89be8c66e9efef16d566a5112d7.gif',
    'https://i.pinimg.com/originals/29/fa/e9/29fae9a863ed4463d46cc3b4dc578e23.gif',
    'https://i.pinimg.com/originals/09/0d/a0/090da08afbbc17e27fa1697612022501.gif',
    'https://i.pinimg.com/originals/fe/97/b2/fe97b209c300962b97646b08ea9f071b.gif',
    'https://i.pinimg.com/originals/70/41/98/70419885f7c2361cde659c14005689c7.gif',
    'https://i.pinimg.com/originals/84/ac/fd/84acfdba875a917232c66725a637b152.gif',
    'https://i.pinimg.com/originals/84/ac/fd/84acfdba875a917232c66725a637b152.gif',
    'https://i.pinimg.com/originals/63/7e/24/637e2420994e549fdbe0b4e671adc153.gif',
    'https://i.pinimg.com/originals/0d/2c/ab/0d2cab7be655fe05174730ab64128cc0.gif',
    'https://i.pinimg.com/originals/3f/7f/db/3f7fdb0e8593a47420078439cbdb2ff3.gif'
  ];


  useEffect(() => {
    function protectRoute() {
      const token = localStorage.getItem("token");
      if (!token) {

        return navigate('/login');
      }
    }

    async function fetchProfile() {
      try {
        const res = await axios({
          url: 'https://localhost:7161' + '/api/User/GetUserById',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        setUserProfile(res.data);
      }
      catch (error) {
        console.log("User NotFound");
      }
    }
    fetchProfile();
    protectRoute();

    async function GetListJobs() {
      try {
        const res = await axios({
          url: 'https://localhost:7161' + '/api/Post/ListAllPosts',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setDataCard(res.data);
      }
      catch (error) {
        console.log("Get Job Error")
      }
    }
    GetListJobs();
    

    document.body.classList.add('HOME');

    return () => {
      document.body.classList.remove('HOME');
    }
  }, []);

  function changeStatus() {
    setTimeout(() => {
      return navigate('/Status')
    }, 1000)
  }


  function togglePopup() {
    SetShowPopup(!showPopup);
    if (showPopup == true) {
      SetcurrentCountNum(0);
      SetcurrentCountTime(0);
    }
  };


  function incrementCounterNum() {
    SetcurrentCountNum(currentCountNum + 1);
  }

  function decrementCounterNum() {
    if (currentCountNum > 0) {
      SetcurrentCountNum(currentCountNum - 1);
    };
  }

  function increaseTime() {
    SetcurrentCountTime(currentCountTime + 1);
  }

  function decreaseTime() {
    if (currentCountTime > 0) {
      SetcurrentCountTime(currentCountTime - 1);
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
              <NavLink style={{cursor: 'pointer'}} id="HomeButton" className="text-dark"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png" alt='iconHome'></img><b>Home</b></h3></NavLink>
            </NavItem>
            <NavItem>
              <div style={{cursor: 'pointer'}} onClick={changeStatus} className="opacity-50"><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png" alt='iconStatus'></img><b>Status</b></h3></div>
            </NavItem>
          </ul>


        </div>
        <div className="col-12 col-sm-6 col-lg-8" id="navCenter">
          {DataCard.map((data) => (
            <Card imgRiderSrc={urlListPost[data.ImgIndex]} imgCilentSrc={undefined} imgCilentSrc2={undefined} imgCilentSrc3={undefined} Header={data.OwnerUserName} />
          ))}
        </div>

        <div className="col-12 col-sm-3 col-lg-2 text-left" id="navRight">
          <div className='row'>
          <div className="col-2"><span className="h1 m-0 material-icons">notifications</span></div>
          <div className="col-10 mt-1 h2"><b>รายการของฉัน</b></div>
          </div>
         
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
                รับฝาก
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
              <input onClick={togglePopup} style={{ backgroundColor: '#ff000d' }} id="POST" class="button1 p-3 " type="submit" value="POST" ></input>
            </div>
          </div>
        </div>


      )}




    </div>


  );
}
export default Home;