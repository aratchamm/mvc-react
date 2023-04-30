import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';

export class Login extends Component {
    static displayName = Login.name;

    componentDidMount() {
        document.body.classList.add('LOGIN');
    }

    componentWillUnmount() {
        document.body.className = '';
      }


    render() {
        return (
            

            <div>

        <Navbar className="navbar-expand-sm fixed-top navbar-toggleable-sm bg-white border-bottom box-shadow mb-3" container-fuild light>
        <NavbarBrand tag={Link} to="/Login"><img src="https://sv1.picz.in.th/images/2023/04/08/mlIkAa.png" alt="logo.png" border="0"
                        width="100px" /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        </Navbar>

                <div style={{marginTop: "5%"}} class="image-container">
                    <img src="https://sv1.picz.in.th/images/2023/04/17/mejP8k.png" alt="My Image" class="login_img"></img>
                </div>
                <div class="wrapper">


                    <form>
                        <label>USERNAME</label>
                        <input type="email" placeholder="" />
                        <label>PASSWORD</label>
                        <input type="password" placeholder="" />
                    </form>
                    <button class= "START">
                        <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Let's Start
                        </Link>
                    </button>

                    <div className="not-member">
                        Don't have an account? <Link to="/signup">Create Account</Link>
                    </div>
                </div>
            </div>
        );
    }
}
