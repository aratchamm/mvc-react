import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  state = {
    showPopup: false
  };

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
       <Navbar className="navbar-expand-sm fixed-top navbar-toggleable-sm bg-white border-bottom box-shadow mb-3" container-fuild light>
  <NavbarBrand tag={Link} to="/Home">
    <img src="https://sv1.picz.in.th/images/2023/04/08/mlIkAa.png" alt="logo.png" border="0" width="100px" />
  </NavbarBrand>

  <Navbar className="ml-auto">
    <NavItem>
      <button onClick={this.togglePopup} type="button" className="icon-button" >
        <span className="material-icons">notifications</span>
        <span className="icon-button__badge">2</span>
      </button>
    </NavItem>

    <NavItem>
    <NavbarBrand tag={Link} to="/login">
    <button tag={Link} to="/login" style={{marginLeft: '30px', border:'none', backgroundColor:'transparent'}}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>
  </NavbarBrand>
      
    </NavItem>
  </Navbar>
</Navbar>


{this.state.showPopup && (

<div id="popup" class="overlay">

    <div class="popup">
        <div class="h2 py-2"><b>data</b></div>
        <div class="content">
            <div class="row">
            </div>
        </div>
    </div>
</div>
)}



      </header>
    );
  }
}
