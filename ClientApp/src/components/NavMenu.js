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

    const buttonStyle = this.state.showPopup ? { color: '#ff0000' } : {};
    const displayButton = this.state.showPopup ? { display: 'none' } : {};

    return (

      <header>
       <Navbar className="navbar-expand-sm fixed-top navbar-toggleable-sm bg-white border-bottom box-shadow mb-3" container-fuild light>
  <NavbarBrand tag={Link} to="/Home">
    <img src="https://sv1.picz.in.th/images/2023/04/08/mlIkAa.png" alt="logo.png" border="0" width="100px" />
  </NavbarBrand>

  <Navbar  className="ml-auto">
    <NavItem>
    <NavbarBrand tag={Link} to="/login">
    <button tag={Link} to="/login" onClick={()=>{localStorage.clear();}} style={{border:'none', backgroundColor:'transparent'}}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>
  </NavbarBrand>
      
    </NavItem>
  </Navbar>
</Navbar>


{this.state.showPopup && (

<div id="popup" className='overlay2'>
    <div class="popup5">
      <span class="popuptext" id="myPopup">A Simple Popup!</span>
    </div>
</div>
)}



      </header>
    );
  }
}
