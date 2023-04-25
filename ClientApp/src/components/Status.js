import React, { Component } from 'react';
import Profile from "./Profile";
import DataProfile from "./DataProfile";
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Status.css';

export class Status extends Component {
  static displayName = Status.name;

  render() {
    return (
        <div id="content" class="container-fluid">

        <div class="row">
          <div class="col-2 text-center" id="navLeftStatus">
          {DataProfile.map((data) => (
                  <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
          ))}

              <br />
              <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} id="HomeStatusButton" className="text-dark" to="/"><img id="HomeIconStatusButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id="StatusStatusButton" className="text-dark" to="/Status"><img id="StatusIconStatusButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></NavLink>
              </NavItem>
            </ul>
          

          </div>
          <div class="col-10 text-center" id="navRightStatus">
          gds
          </div>

     
          
        </div>
      </div>
    );
  }
}
