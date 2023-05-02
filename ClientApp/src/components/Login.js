import React, { Component,useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import axios from 'axios';


function Login(){

    useEffect(() => {
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
            navigate('/Home')
        }
        catch(error){
            console.log("Username or Password Incorrect")
            alert("Username or Password Incorrect")
        }
    }

    


    return (
        <div>
    
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