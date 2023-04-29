import React, { Component } from 'react';
import Profile from "./Profile";
import DataProfile from "./DataProfile";
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Status.css';
import './Home.css';

export class Status extends Component {
  static displayName = Status.name;

  componentDidMount() {
    document.body.classList.add('Status');
}
componentWillUnmount() {
  document.body.className = '';
}
  render() {
    return (
        <div id="content" class="container-fluid">

        <div class="row">
          <div class="col-12 col-sm-3 col-xs-3 col-lg-2 text-center" id="navLeftStatus">
          {DataProfile.map((data) => (
                  <Profile key={data.id} imgSrc={data.imgSrc} name={data.name} tel={data.tel} />
          ))}

              <br />
              <ul className="navbar-nav flex-grow">
              <NavItem>
              <div class="opacity-50"><NavLink tag={Link} id="HomeButton" className="text-dark" to="/Home"><h3><img id="HomeIconButton" src="https://sv1.picz.in.th/images/2023/04/24/y3dDQv.png"></img><b>Home</b></h3></NavLink></div>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} id="StatusButton" to="/Status"><h3><img  id="StatusIconButton" src="https://sv1.picz.in.th/images/2023/04/25/y3S5mJ.png"></img><b>Status</b></h3></NavLink>
              </NavItem>
            </ul>
          

          </div>
          <div class="col-12 col-sm-9 col-xs-9 col-lg-10 text-center" id="navRightStatus">
          gds
          </div>

     
          
        </div>
      </div>
    );
  }
}
