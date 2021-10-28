import React from "react";
import { Link } from "react-router-dom";
import Admin from "../../../Admin_Side/Admin";
import "./styles/Profile.css"

import SideBar from '../../../User_Side/SideBar/SideBar';
const Profile = (props) => {
  console.log(props.user.user_type)
  //if(props.user.user_type=="user")
  
  return (
    <>

    

          <ul className="prolist">
          <li className="plist">
<Link to={{pathname: `/users/${props.userId}`}} style={{color:'white'}} >Home</Link>
</li>
<li className="profile">PROFILE </li>
</ul>
<div className="row-no-gutters">
                 <div className="col-md-8 mx-auto">
          <h1>Welcome {props.user.username}!</h1>
          
          <br/>
        
          <button className="btn btn-outline-primary mr-2">
          <Link to={`/membership`}>Membership Plan</Link>
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
       
          <button
            className="btn btn-outline-danger"
            onClick={props.handleSignout}
          >
            {" "}
            Sign out
          </button>
          <br/>
          <br/>
        </div>
        <br/>
    
                   <div className = "user">
                         
                            <div className="user__container">
                                    <form>
                                      <h1>Profile</h1>
                                           
                                           
                                            <h6 style={{textAlign:"left"}}>User Name </h6>
                                            <input  name="username" className="form-control" value={props.user.username} 
                                              readonly  />
                               
                                            <h6 style={{textAlign:"left"}}> Email </h6>
                                            <input  name="email" className="form-control" value={props.user.email}
                                              readonly  />
                              
                                            <h6 style={{textAlign:"left"}}> Phone Number </h6>
                                            <input  name="phonenumber" className="form-control" value={props.user.phonenumber}
                                              readonly  />
                                      
                                            <h6 style={{textAlign:"left"}}> Membership Type </h6>
                                            <input  name="profile" className="form-control" value={props.user.member_type}
                                           readonly     />
                                        
                                            <h6 style={{textAlign:"left"}}> Membership Validity</h6>
                                            <input  type="text" name="membership" className="form-control" value={props.user.member_validity}
                                           readonly     />
                                   

                                                            </form>
                                </div>
                            </div>
                        </div>

        </>
  );
 
};

export default Profile;