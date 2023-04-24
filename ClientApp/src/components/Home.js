import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="container-fluid">

        <div class="row">
          <div class="col text-center" id="navLeft">
            <div class="profile">
              <img id="profileIMG" src="https://i.pinimg.com/564x/f7/2d/e3/f72de35fb3f8690080cfdad5a54a0662.jpg"></img>
              <br /><br />
              <div class="Info">
                <p>
                  <span id="editInfo"><span class="material-symbols-outlined">edit</span> edit</span><br />
                  <span id="nameInfo"><b>Name Name</b></span><br />
                  <span id="telInfo">088-888-8888</span><br /><br />
                </p>
              
              <br />
              <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} id="HomeButton" className="text-dark" to="/"><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id="StatusButton" className="text-dark" to="/counter"><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></NavLink>
              </NavItem>
            </ul>
            </div>


            </div>
          </div>
          <div class="col-8 text-center" id="navCenter">
            <div id="compo" class="container">

              <img class="picCom" src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"></img>
              <p>fsafsa</p>
              <div class="container">
                <div class="row">
                  <div class="col-8">
                    {/* เพิ่มโปรไฟล์คนมาถ้ามีคนสั่งเพิ่ม */}
                    <img class="photoCol" src="https://i.pinimg.com/564x/f7/2d/e3/f72de35fb3f8690080cfdad5a54a0662.jpg"></img>
                    <img class="photoCol" src="https://i.pinimg.com/564x/f7/2d/e3/f72de35fb3f8690080cfdad5a54a0662.jpg"></img>
                    {/* ถ้าคนสั่งเพิ่มมากกว่า 3 คน */}
                    <img class="photoCol" src="https://sv1.picz.in.th/images/2023/04/24/ykJ4XJ.png"></img>
                  </div>
                  <div class="col-sm">
                  <img class="plus" src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"></img>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col text-center" id="navRight">
            text3
          </div>
        </div>
      </div>
    );
  }
}
