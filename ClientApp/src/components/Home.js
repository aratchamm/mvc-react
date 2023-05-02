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
    currentCountNum: 0,
    currentCountTime: 0
  };

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup, currentCountNum: 0, currentCountTime: 0 });
  };

  constructor(props) {
    super(props);
    this.state = { currentCountNum: 0, currentCountTime: 0 };
    this.incrementCounterNum = this.incrementCounterNum.bind(this);
    this.decrementCounterNum = this.decrementCounterNum.bind(this);
    this.incrementCounterTime = this.incrementCounterTime.bind(this);
    this.decrementCounterTime = this.decrementCounterTime.bind(this);
  }

  incrementCounterNum() {
    this.setState({
      currentCountNum: this.state.currentCountNum + 1
    });
  }

  decrementCounterNum() {
    if (this.state.currentCountNum > 0) {
      this.setState({
        currentCountNum: this.state.currentCountNum - 1
      })
    }
    ;
  }

  incrementCounterTime() {
    this.setState({
      currentCountTime: this.state.currentCountTime + 1
    });
  }

  decrementCounterTime() {
    if (this.state.currentCountTime > 0) {
      this.setState({
        currentCountTime: this.state.currentCountTime - 1
      })
    }
    ;
  }


  render() {


    return (
      <div id="content" className="container-fluid">

        <div className="row">
          <div className="col-12 col-sm-3 col-xs-3 col-lg-2  mt-5 text-center" id="navLeft">
            {DataProfile.map((data) => (
              <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
            ))}

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
              <Card key={data.id} imgRiderSrc={data.imgRiderSrc} imgCilentSrc={data.imgCilentSrc} imgCilentSrc2={data.imgCilentSrc2} imgCilentSrc3={data.imgCilentSrc3} Header={data.Header} />
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
              <button onClick={this.togglePopup} className="h5 py-3 my-5" id="Get">สร้างรายการสั่งซื้อ</button>
            </div>

          </div>

        </div>


        {this.state.showPopup && (

          <div id="popup2" className="overlay">
            <div className="popup2">
              <a className="close m-3" onClick={this.togglePopup}>
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
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.decrementCounterNum}>-</button>

                  </div>

                  <div className="col-2 h3 m-auto text-center">
                    {this.state.currentCountNum}
                  </div>

                  <div className="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.incrementCounterNum}>+</button>
                  </div>

                  <div className="col-2 h5 m-auto">ชิ้น</div>




                </div>

                <div className="row pt-4 text-center">

                  <div className="col-2 h4  m-auto">
                    <img src="https://sv1.picz.in.th/images/2023/05/01/yqEhKl.png"></img>

                  </div>

                  <div className="col-2 h5 m-auto text-center" for="chooseAmount">เวลา</div>

                  <div className="col-2 h4 ml-5 my-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.decrementCounterTime}>-</button>

                  </div>

                  <div className="col-2 h3 m-auto text-center">
                    {this.state.currentCountTime}
                  </div>

                  <div className="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.incrementCounterTime}>+</button>
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
                <input onClick={this.togglePopup} style={{backgroundColor: '#ff000d'}} id="POST" class="button1 p-3 " type="submit" value="POST" ></input>
              </div>
            </div>
          </div>


        )}




      </div>


    );
  }
}
