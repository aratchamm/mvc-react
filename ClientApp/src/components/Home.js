import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Profile from "./Profile";
import DataProfile from "./DataProfile";

import Card from "./Card";
import DataCard from "./DataCard";


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
                <NavLink tag={Link} id="HomeButton" className="text-dark" to="/"><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id="StatusButton" className="text-dark" to="/counter"><img id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></NavLink>
              </NavItem>
            </ul>
          

          </div>
          <div class="col-8 text-center" id="navCenter">
          {DataCard.map((data) => (
                  <Card key={data.id} imgCilentSrc={data.imgCilentSrc} imgCilentSrc2={data.imgCilentSrc2} Header={data.Header} />
          ))}
          </div>

          <div class="col-2 text-center" id="navRight">
            text3
          </div>
          
        </div>
      </div>
    );
  }
}
