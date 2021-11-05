import React from "react";
import PropTypes from "prop-types";
import "./styles/AdminLogin.css"
import { Link } from 'react-router-dom';
import Logo from "./styles/Logo.png"

const AdminLogin = (props) => {
  return (
    <div className="Adminlogin">
      {/* Logo */}
			  <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="Adminlogin__logo"
                />
            </Link>
      <div className="Adminlogin__container">
      
      <form  onSubmit={props.handleSubmit}>
      <h1 >Admin Login</h1>
      <br/>
       
       <h5 style={{textAlign:"left"}}>   User Name:{" "} </h5> 
          <input
         
            value={props.username}
            name="username"
            onChange={props.handleChange}
            required
          ></input>
      
      <h5 style={{textAlign:"left"}}>   Password:{" "} </h5> 
          <input
          
            value={props.password}
            type="password"
            name="password"
            onChange={props.handleChange}
            required
          ></input>
      
        <br/>
        
        <button  className="Adminlogin__signInButton">Login</button>
      </form>
      
      <Link   className="Adminlogin__RegisterButton" to="/adminsignup">Don't have an account? Sign up here</Link>
       </div>
    </div>
  );
};

AdminLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default AdminLogin;


