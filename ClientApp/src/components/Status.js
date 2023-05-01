import React, { Component } from 'react';
import Profile from "./Profile";
import DataProfile from "./DataProfile";
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import './Status.css';
import './Home.css';

import StatusFak from "./StatusFak";
import StatusDatafak from "./StatusDataFak";

import StatusRub from "./StatusRub";
import StatusDataRub from "./StatusDataRub";


export class Status extends Component {
  static displayName = Status.name;

  componentDidMount() {
    document.body.classList.add('Status');
    const toggleSwitch = document.querySelector('.can-toggle__switch');
    const toggleContentRub = document.getElementById('toggleContentRub');
    const toggleContentFak = document.getElementById('toggleContentFak');

    toggleSwitch.addEventListener('click', () => {
      if (toggleSwitch.classList.contains('active')) {
        if (document.getElementById('d').checked) {
          toggleContentFak.style.display = 'block';
          toggleContentRub.style.display = 'none';
        } else {
          toggleContentFak.style.display = 'none';
          toggleContentRub.style.display = 'block';
        }
      } else {
        if (document.getElementById('d').checked) {
          toggleContentFak.style.display = 'none';
          toggleContentRub.style.display = 'block';
        } else {
          toggleContentFak.style.display = 'block';
          toggleContentRub.style.display = 'none';
        }
      }
    });




    // Set the initial display state of the content elements
    toggleContentRub.style.display = 'block';
    toggleContentFak.style.display = 'none';
  }

  componentWillUnmount() {
    document.body.className = '';
  }


  render() {
    return (
      <div id="content" class="container">

        <div class="row">
          <div class="col-12 col-sm-3 col-xs-3 col-lg-2  mt-5 text-center" id="navLeftStatus">
            {DataProfile.map((data) => (
              <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
            ))}

            <br />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <div class="opacity-50"><NavLink tag={Link} id="HomeButton" className="text-dark" to="/Home"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></h3></NavLink></div>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id="StatusButton" to="/Status"><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></h3></NavLink>
              </NavItem>
            </ul>


          </div>
          <div class="col-12 col-sm-9 col-xs-9 col-lg-10 p-3" id="navRightStatus">
            <div class='row'>

              <div class="can-toggle demo-rebrand-1">
                <div class='p-2 mt-5'> <h2><b>รายการของฉัน</b></h2> </div>
                <div class='p-2 mb-5'> <input id="d" type="checkbox" ></input>
                  <label for="d">
                    <div class="can-toggle__switch" data-checked="สั่งซื้อ" data-unchecked="ฝากซื้อ"></div>
                  </label>
                </div>
              </div>




              <div style={{ padding:0, borderRadius: '30px', width: '98%' }} class='bg-white m-auto' id="toggleContentRub">
                <div class="col-12 px-4 py-4 h3">
                  <b>ฝากซื้อ</b>
                </div>
                <div style={{ backgroundColor: '#F7F7F7'}} id='Headd' class='row py-2 h5 m-auto'>


                    <div class="col-3 py-2 ">
                      <b>สถานะ</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>ชื่อผู้รับ</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>ชื่ออาหาร</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>หมายเหตุ</b>
                    </div>



                </div>

                <div id='Sub2' class='row text-left py-4 h6 m-auto bg-white'>

                  {StatusDatafak.map((data) => (
                    <StatusFak key={data.id} Status={data.Status} By={data.By} Menu={data.Menu} Detail={data.Detail} Tel={data.Tel} Color={data.Color} />
                  ))}

                </div>


              </div>


              <div style={{ padding:0, borderRadius: '30px', width: '98%' }} class='bg-white m-auto' id="toggleContentFak">
                <div class="col-12 px-4 py-4 h3">
                  <b>สั่งซื้อ</b>
                </div>
                <div style={{ backgroundColor: '#F7F7F7'}} id='Headd2' class='row py-2 h5 m-auto'>


                    <div class="col-3 py-2 ">
                      <b>สถานะ</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>ชื่อผู้รับ</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>ชื่ออาหาร</b>
                    </div>
                    <div class="col-3 py-2 ">
                      <b>หมายเหตุ</b>
                    </div>



                </div>

                <div id='Sub' class='row text-left py-4 h6 m-auto bg-white'>

                {StatusDataRub.map((data) => (
                    <StatusRub key={data.id} Status={data.Status} By={data.By} Menu={data.Menu} Detail={data.Detail} Color={data.Color} Tel={data.Tel} />
                ))}

                </div>


              </div>
              
              



            </div>

          </div>
        </div>



      </div>
    );
  }
}
