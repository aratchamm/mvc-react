import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Profile from "./Profile";
import DataProfile from "./DataProfile";

import Card from "./Card";
import DataCard from "./DataCard";

import RubFak from "./RubFak";
import DataRubFak from "./DataRubFak";

import Rub from "./Rub";
import DataRub from "./DataRub";


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div id="content" class="container-fluid">

        <div class="row">
          <div class="col-2 text-center" id="navLeft">
            {DataProfile.map((data) => (
              <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
            ))}

            <br />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} id="HomeButton" className="text-dark" to="/"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></h3></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id="StatusButton" className="text-dark" to="/Status"><h3><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></h3></NavLink>
              </NavItem>
            </ul>


          </div>
          <div class="col-8 text-center" id="navCenter">
            {DataCard.map((data) => (
              <Card key={data.id} imgCilentSrc={data.imgCilentSrc} imgCilentSrc2={data.imgCilentSrc2} Header={data.Header} />
            ))}
          </div>

          <div class="col-2 text-left" id="navRight">
            <div class="p-5"><h2><b>รายการรับฝาก</b></h2></div>
            <hr></hr>
            <div id="Fak">
                <div class="row p-1 mt-5 mb-4 d-flex justify-content-center">
                  <div class="col-6 h3 m-auto text-left">
                    รับฝาก
                  </div>
                  <div class="col-6 h6 m-auto text-left">
                    <a href='/Status' id="view"><i>view all >></i></a>
                  </div>
                  </div>

                  {DataRubFak.map((data) => (
              <RubFak key={data.id} Status={data.Status} Menu={data.Menu} Color={data.Color} />
            ))}
                
            </div>

            <div id="Rub">
                <div class="row p-1 mt-5 mb-4 d-flex justify-content-center">
                  <div class="col-6 h3 m-auto text-left">
                    รอรับ
                  </div>
                  <div class="col-6 h6 m-auto text-left">
                    <a href='/Status' id="view"><i>view all >></i></a>
                  </div>
                  </div>

                  {DataRub.map((data) => (
              <Rub key={data.id} Status={data.Status} Menu={data.Menu} />
            ))}
                
            </div>
          </div>

        </div>
      </div>
    );
  }
}
