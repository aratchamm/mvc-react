import React, { Component,useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import axios from 'axios';


function Login(){

    useEffect(() => {
        localStorage.clear();
        document.body.classList.add('LOGIN');

        return () => {
            document.body.classList.remove('LOGIN');
        }
    }, []);

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        username:"",
        password:""
    })
    async function Login(){
        try{
            const res = await axios({
                url: 'https://localhost:7161' + '/api/User/Login',
                method: 'POST',
                data: {
                    Username: userLogin.username,
                    Password: userLogin.password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            setTimeout(() => {
                localStorage.setItem('token',res.data)
                return navigate('/Home')
            }, 1000)
        }
        catch(error){
            console.log("Username or Password Incorrect")
            alert("Username or Password Incorrect")
        }
    }

    


    return (
        <div>
    

    <Navbar style={{padding:'0.7%'}} className="navbar-expand-sm fixed-top navbar-toggleable-sm bg-white border-bottom" container-fuild light>
  <NavbarBrand style={{margin:'auto'}} tag={Link} to="/Home">
    <img src="https://sv1.picz.in.th/images/2023/04/08/mlIkAa.png" alt="logo.png" border="0" width="100px" />
  </NavbarBrand>

</Navbar>

                    <div style={{marginTop: "5%"}} className="image-container">
                        <img src="https://sv1.picz.in.th/images/2023/04/17/mejP8k.png" alt="My Image" className="login_img"></img>
                    </div>
                    <div className="wrapper">
    
    
                        <form>
                            <label >USERNAME</label>
                            <input onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    username:
                                        e.target.value,
                                })
                            }}
                            type="email" placeholder="" />
                            <label>PASSWORD</label>
                            <input onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password:
                                        e.target.value,
                                })
                            }}
                            type="password" placeholder="" />
                        </form>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} ><button className= "START" onClick={Login}>Let's Start</button></Link>
                        
    
                        <div className="not-member">
                            Don't have an account? <Link to="/signup">Create Account</Link>
                        </div>
                    </div>
                </div>
    );
}

export default Login;