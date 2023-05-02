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
    showPopup: false
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
          <div class="col-12 col-sm-6 col-lg-8" id="navCenter">
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

          <div id="popup2" class="overlay">
            <div class="popup2">
              <a class="close m-3" onClick={this.togglePopup}>
                <img border="0" alt="" src="https://sv1.picz.in.th/images/2023/05/01/yqEb4J.png"></img>
              </a>
              <div class="h2 pt-2 pb-4 "><b>หิวไหม?</b></div>
              <div>
                <div class="row  text-center">

                  <div class="col-2 h4  m-auto">
                    <img src="https://sv1.picz.in.th/images/2023/05/01/yqEkPk.png" ></img>

                  </div>

                  <div class="col-2 h5 m-auto text-center" for="chooseAmount">จำนวน</div>

                  <div class="col-2 h4 ml-5 my-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.decrementCounter}>-</button>

                  </div>

                  <div class="col-2 h3 m-auto text-center">
                    {this.state.currentCount}
                  </div>

                  <div class="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.incrementCounter}>+</button>
                  </div>

                  <div class="col-2 h5 m-auto">ชิ้น</div>




                </div>

                <div class="row mt-4 text-center">

                  <div class="col-2 h4  m-auto">
                    <img src="https://sv1.picz.in.th/images/2023/05/01/yqEhKl.png"></img>

                  </div>

                  <div class="col-2 h5 m-auto text-center" for="chooseAmount">เวลา</div>

                  <div class="col-2 h4 ml-5 my-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.decrementCounter}>-</button>

                  </div>

                  <div class="col-2 h3 m-auto text-center">
                    {this.state.currentCount}
                  </div>

                  <div class="col-2 h4 m-auto">
                    <button style={{ backgroundColor: 'transparent', color: '#ff0000', borderColor: '#ff0000' }} onClick={this.incrementCounter}>+</button>
                  </div>

                  <div class="col-2 h5 m-auto">
                    <select style={{ borderWidth: '2px' }} id="chooseTime">
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
                <input onClick={this.togglePopup} style={{backgroundColor: '#ff000d'}}  class="button1 p-3 " type="submit" value="POST" ></input>
              </div>
            </div>
          </div>


        )}




      </div>


    );
  }
}
