import React, { Component,useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Login.css';
import axios from "axios";

function Signup()
{

  useEffect(() => {
    localStorage.clear();
    document.body.classList.add('LOGIN');

    return () => {
        document.body.classList.remove('LOGIN');
    }
}, []);



  const navigate = useNavigate()
  const [signupUser, setSignupUser] = useState({
    username:"",
    password:"",
    phone:"",
  })

  async function SingUpHandler(){
    if(signupUser.username==""||
    signupUser.password==""||
    signupUser.phone==""){
      console.log("Please enter reqiured info")
    }
    else{
      try{
        const res = await axios({
          url: 'https://localhost:7161' + '/api/User/Register',
          method: 'POST',
          data: {
              Username: signupUser.username,
              Password: signupUser.password,
              Phone: signupUser.phone
          },
          headers: {
              'Content-Type': 'application/json',
          }
        })
        console.log("Sign Up Successfully")
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
      catch(err){
        console.log("This username is already in use")
      }
    }
  }
  return (
      <div>

<Navbar style={{padding:'0.7%'}} className="navbar-expand-sm fixed-top navbar-toggleable-sm bg-white border-bottom" container-fuild light>
  <NavbarBrand style={{margin:'auto'}} tag={Link} to="/Home">
    <img src="https://sv1.picz.in.th/images/2023/04/08/mlIkAa.png" alt="logo.png" border="0" width="100px" />
  </NavbarBrand>

</Navbar>

        <div style={{ marginTop: "8%" }} className="image-container">
          <h2 style={{ fontWeight: "bold", transform: "translateY(65px)" }}>Create Account</h2>
        </div>
        <div className="wrapper-signup">
          <form>
            <label>USERNAME</label>
            <input onChange={(e) => {
              setSignupUser({
                ...signupUser,
                username:
                    e.target.value,
              })
            }}
            type="email" placeholder="" />
            <label>PASSWORD</label>
            <input onChange={(e) => {
              setSignupUser({
                ...signupUser,
                password:
                    e.target.value,
              })
            }}
            type="email" placeholder="" />
            <label>TEL NUMBER</label>
            <input onChange={(e) => {
              setSignupUser({
                ...signupUser,
                phone:
                    e.target.value,
              })
            }}
            type="tel number" maxLength="10" onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }} />
          </form>
          <button onClick={SingUpHandler}
          className="CREATE">Create Account</button>
          <div className="not-member">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    );
}

export default Signup