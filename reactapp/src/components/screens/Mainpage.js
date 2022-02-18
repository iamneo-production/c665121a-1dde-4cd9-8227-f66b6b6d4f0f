import React,{useEffect} from 'react';
import { Link } from "react-router-dom";

import '../styles/Mainpage.css';
function Mainpage(){
    useEffect(() => {
        document.title = "WatchService  ||  Home";
      },[]);
    return(
        
        <div className="home" style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            
                <h1 style={{color:"black",fontSize:70,marginBottom:40}}>WELCOME TO WATCH SERVICE</h1>
                <nav>
                    <Link id="login-main"className="btn btn-dark mt-3"to="/Login">Login</Link>
                
                    <Link id="signup-main"className="btn btn-danger mt-3 ml-3" to="/Register">Register</Link>
                </nav>

            </div>

            
    );
    }
    export default Mainpage;
  /*<div>
            <img src={watchbg} alt="" />
            <div>
                <span className="">

                    <nav>
                        <Link to="/Login">Signin</Link>
                    </nav>
                    <nav>
                        <Link to="/Register">SignUp</Link>
                    </nav>
                </span>
            </div>
        </div>
        <div className='temp'>
        <div className="container mt-5 ">
            <div className="row" style={{justifyContent:'space-around'}}>
                <div className="col-md-5" style={{position:'absolute'}}>
                    <img src={watchbg} alt="" className="img-fluid mx-auto my-auto w-100" />*/