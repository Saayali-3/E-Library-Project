import React from "react";
import { Link } from "react-router-dom";
import Admin from "../../../Admin_Side/Admin";
import "./styles/user.css"
import SideBar from '../../../User_Side/SideBar/SideBar';

import Home from '../../../User_Side/Home';
const UserView = (props) => {
  console.log(props.user.user_type)

 if(props.user.user_type=="admin")
 {
   return  (
     <div> 
       
      <Admin/>
     </div>
   );
 }
 else
 {
  return(
 <div> 
   <SideBar/>
   <Home/>
    </div>
  )
 }
};

export default UserView;