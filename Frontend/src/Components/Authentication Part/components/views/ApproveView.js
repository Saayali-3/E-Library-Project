import React, { Component } from 'react'
import "./styles/Approve.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {fetchAllUsersThunk,editUserThunk,fetchUserIdThunk } from "../../thunks";

class ApproveProcess extends Component {
    constructor(props) {
        super(props);
       props.fetchAllUsers() 
      
        this.state = {  
            
           users:[] ,
           selectedUser:[],
           userId:0
        };
       
        console.log(this.state.users)
    }
    
    
    componentDidMount(){
        this.props.fetchAllUsers()

        .then(res => {
            this.setState(
           {
           users: this.props.allUsers.payload
     }
       )
        }


        );
        
    }
approveUser(x){
    var userEn=[];
    //var x=this.state.email
    userEn=this.state.users.filter(function(item){
      //  console.log(item.email,i)
      item.enabled=true;
      item.password=null;
      return  item.email === x;
   }).map(function({id,username,email,enabled,member_type,member_validity,phonenumber,user_type}){
      return {id,username,email,enabled,member_type,member_validity,phonenumber,user_type};
    })
    //thi.props.users=useren
    this.setState(
        {
            selectedUser:userEn
        }
    )
    console.log(userEn[0])
    this.props.fetchUserId(userEn[0].id)
    this.props.editUserEntity(userEn[0])
   

}

removeUser(x){
    var userEn=[];
    userEn=this.state.users.filter(function(item){
      //  console.log(item.email,i)
      item.enabled=false;
      item.password=null;
      return  item.email === x;
   }).map(function({id,username,email,enabled,member_type,member_validity,phonenumber,user_type}){
      return {id,username,email,enabled,member_type,member_validity,phonenumber,user_type};
    })
    this.setState(
        {
            selectedUser:userEn
        }
    )
    console.log(userEn[0])
    this.props.editUserEntity(userEn[0])

}    /*
hidden={employee.enabled}
hidden={!employee.enabled}
*/  

    render() {
        console.log(this.props.allUsers)
        console.log(this.state.users)
        console.log(this.state.selectedUser)
        return (
          
            <div className="container">
               

               <ul className="ulist">
  <li className="list"><Link to={{pathname: `users/${this.props.userId}`}} >Admin Home</Link></li>
  <li className="userapprove">User List</li>
</ul>
               
                 
             
                 <br></br>
                
                 <div className = "row">
                 <div className = "card-body">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> UserName</th>
                                  
                                    <th>  Email Id</th>
                                   <th>User Type</th> 
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        employee => 
                                        <tr key = {employee}>
                                             <td> {employee.username} </td>   
                                            
                                             <td> {employee.email}</td>
                                             <td> {employee.user_type}</td>
                                            <td>
                                            <button type="button" className="btn btn-success" hidden={employee.enabled} onClick={ () => this.approveUser(employee.email)} >Approve </button>
                                          <span hidden={!employee.enabled} >Approved</span> 
                                          </td>
                                            <td>
                                            <button className="btn btn-danger" hidden={!employee.enabled} style={{marginLeft: "10px"}} onClick={ () => this.removeUser(employee.email)} >Remove </button>
                                            <span hidden={employee.enabled} >Removed</span> 
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                      
                        </table>
                 
                 </div>
                 </div>
                            
                </div>
                            
         )
    }
}


const mapState = (state) => {
	console.log(state)
	
	return {
		allUsers: state.allUsers,
		userId:state.userId.payload
	  };
	
  };
  const mapDispatch = (dispatch) => {
	return {
	  fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
      editUserEntity:(user)=> dispatch(editUserThunk(user)),
	  fetchUserId:(id)=>dispatch(fetchUserIdThunk(id))
	 	};
  };
  
export default connect(mapState, mapDispatch)(ApproveProcess);