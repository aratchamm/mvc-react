import React, { useState, useEffect } from 'react';
import Profile from "./Profile";
import { Link, useNavigate } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import './Status.css';
import './Home.css';

import StatusFak from "./StatusFak";
import StatusDatafak from "./StatusDataFak";

import StatusRub from "./StatusRub";
import StatusDataRub from "./StatusDataRub";

import axios from 'axios';



function Status() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [showRub, setShowRub] = useState(false);
  const [showFak, setShowFak] = useState(true);

  const [userProfile, setUserProfile] = useState({
    id: "",
    username: "",
    password: "",
    phone: "",
    profileImgIndex: -1
  });


  const toggleshow = () => {
    setShowFak(!showFak);
    setShowRub(!showRub);
  }

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

  function changeHome() {
    setTimeout(() => {
      return navigate('/Home')
  }, 1000)
  }



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
    protectRoute()
    document.body.classList.add('Status');



    return () => {
      document.body.classList.remove('Status');
    }
  }, [showFak, showRub]);


  return (
    <div id="content" className="container">

      <div className="row">
        <div className="col-12 col-sm-3 col-xs-3 col-lg-2  mt-5 text-center" id="navLeftStatus">
          <Profile imgSrc={urlList[userProfile.profileImgIndex]} name={userProfile.username} tel={userProfile.phone} />

          <br />
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <div  onClick={changeHome}  style={{cursor: 'pointer'}}  className="opacity-50"><NavLink id="HomeButton" className="text-dark" ><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></h3></NavLink></div>
            </NavItem>
            <NavItem>
              <NavLink style={{cursor: 'pointer'}}  id="StatusButton" ><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></h3></NavLink>
            </NavItem>
          </ul>

        </div>
        <div className="col-12 col-sm-9 col-xs-9 col-lg-10 p-3" id="navRightStatus">
          <div className='row'>
            <div className="can-toggle demo-rebrand-1">
              <div id ="Toggle20">
                <div className='p-2 mt-5 mb-4'> <h2><b>รายการของฉัน</b></h2> </div>
                  <div className='p-2'>
                    <input id="d" type="checkbox" ></input>
                      <label for="d">
                        <div style={{cursor: 'pointer'}} className='col-12 bg-white' id="Toggle" onClick={toggleshow} className="can-toggle__switch" data-checked="รับฝาก" data-unchecked="ฝากซื้อ"></div>
                      </label>
              </div>
                </div>
            </div>

            {showFak &&
              <div style={{ padding: 0, borderRadius: '30px', width: '98%' }} className='bg-white m-auto' id="toggleContentRub">
                <div style={{ backgroundColor: '' }} id='Headd' className='row py-2 h5 m-auto'>
                  <div className="col-3 py-2 ">
                    <b>สถานะ</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>ชื่อและเบอร์ผู้รับ</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>ชื่ออาหาร</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>หมายเหตุ</b>
                  </div>
                </div>
                <div className='blank'>.</div>
                <div id='Sub2' className='row text-left py-4 h6 m-auto bg-white'>
                  {StatusDatafak.map((data) => (
                    <StatusFak key={data.id} Status={data.Status} By={data.By} Menu={data.Menu} Detail={data.Detail} Tel={data.Tel} Color={data.Color} />
                  ))}
                </div>
              </div>}

            {showRub &&
              <div style={{ padding: 0, borderRadius: '30px', width: '98%' }} className='bg-white m-auto' id="toggleContentFak">
                <div style={{ backgroundColor: '' }} id='Headd2' className='row py-2 h5 m-auto'>
                  <div className="col-3 py-2 ">
                    <b>สถานะ</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>ชื่อและเบอร์ผู้รับ</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>ชื่ออาหาร</b>
                  </div>
                  <div className="col-3 py-2 ">
                    <b>หมายเหตุ</b>
                  </div>
                </div>
                <div className='m0 p0 blank'>.</div>
                <div id='Sub' className='row text-left py-4 h6 m-auto bg-white'>
                  {StatusDataRub.map((data) => (
                    <StatusRub key={data.id} Status={data.Status} By={data.By} Menu={data.Menu} Detail={data.Detail} Color={data.Color} Tel={data.Tel} />
                  ))}
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;