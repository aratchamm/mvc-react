import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Profile from "./Profile";
import DataProfile from "./DataProfile";

import Card from "./Card";
import DataCard from "./DataCard";

import RubFak from "./Fak";
import DataRubFak from "./DataFak";

import Rub from "./Rub";
import DataRub from "./DataRub";


export class Home extends Component {
  static displayName = Home.name;



  componentDidMount() {
    document.body.classList.add('HOME');
  }
  componentWillUnmount() {
    document.body.className = '';
  }

  state = {
    showPopup: false,
  };

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  decrementCounter() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  }


  render() {
    return (
      <div id="content" class="container-fluid">

        <div class="row">
          <div class="col-12 col-sm-3 col-xs-3 col-lg-2  mt-5 text-center" id="navLeft">
            {DataProfile.map((data) => (
              <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
            ))}

            <br />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} id="HomeButton" className="text-dark" to="/Home"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png" alt='iconHome'></img><b>Home</b></h3></NavLink>
              </NavItem>
              <NavItem>
                <div class="opacity-50"><NavLink tag={Link} id="StatusButton" to="/Status"><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png" alt='iconStatus'></img><b>Status</b></h3></NavLink></div>
              </NavItem>
            </ul>


          </div>
          <div class="col-12 col-sm-6 col-lg-8 text-center" id="navCenter">
            {DataCard.map((data) => (
              <Card key={data.id} imgCilentSrc={data.imgCilentSrc} imgCilentSrc2={data.imgCilentSrc2} imgCilentSrc3={data.imgCilentSrc3} Header={data.Header} />
            ))}
          </div>

          <div class="col-12 col-sm-3 col-lg-2 text-left" id="navRight">
            <div class="px-2 pb-3 h2"><b>รายการของฉัน</b></div>
            <hr></hr>
            <div id="Fak">
              <div class="row p-1 mt-5 mb-4">
                <div class="col-12 h3 my-auto">
                  ฝากซื้อ
                </div>
              </div>

              {DataRubFak.slice(0, 3).map((data) => (
                <RubFak key={data.id} Status={data.Status} Menu={data.Menu} Color={data.Color} />
              ))}

              <div class="col-12 h6 p-2 my-auto">
                <a href='/Status' id="view"><i>view all >></i></a>
              </div>


            </div>

            <div id="Rub">
              <div class="row p-1 mt-5 mb-4">
                <div class="col-12 h3 m-auto text-left">
                  สั่งซื้อ
                </div>

              </div>

              {DataRub.slice(0, 3).map((data) => (
                <Rub key={data.id} Status={data.Status} Menu={data.Menu} Color={data.Color} />
              ))}

              <div class="col-12 h6 p-2 my-auto">
                <a href='/Status' id="view"><i>view all >></i></a>
              </div>

            </div>

            <div class="mx-auto text-center">
              <button onClick={this.togglePopup} class="h5 py-3 my-5" id="Get">ทำการสั่งอาหาร</button>
            </div>

          </div>

        </div>


        {this.state.showPopup && (

          <div id="popup1" class="overlay">
            <div class="popup1">
              <img class="imgstyle"
                src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" alt=""></img>
              <a class="close my-1 mx-2" href="/Home"><img border="0" alt="" src="https://sv1.picz.in.th/images/2023/04/28/ygp9r1.png"></img></a>
              <div style={{margin: '2%'}} class="content">
                <form class="px-5" action="">
                  <p class="h5 p-2 c" for="fname">ชื่ออาหาร</p>
                  <input style={{width: '98%'}} class="p-2 h6 d-block m-auto" type="text" id="fname" name="fname" placeholder="ตัวอย่าง ข้าวผัดกระเทียม"></input>
                  <p class="h5 px-2 pt-4 pb-2 c" for="note">หมายเหตุ (ถ้ามี)</p>
                  <input style={{width: '98%'}} class="p-2 h6 d-block m-auto" type="text" id="note" name="note" placeholder="ตัวอย่าง ไม่ใส่ผัก"></input>
                </form>
                <div class="row pt-4">
                  <div class="col-sm-5 col-lg-5 text-center h4 m-auto">
                    <div class="row">

                      <div class="col-4">
                      <button onClick={this.decrementCounter}>-</button>
                      
                      </div>

                      <div class="col-4 text-center">
                      {this.state.currentCount}
                      </div>

                      <div class="col-4">
                      <button onClick={this.incrementCounter}>+</button>
                      </div>

                    

        
        

                    </div>
                    
                  </div>
                  <div class="col-sm-7 col-lg-7">
                  <input class="button1 h4 p-3" type="submit" value="ฝากเลย"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}




      </div>


    );
  }
}
