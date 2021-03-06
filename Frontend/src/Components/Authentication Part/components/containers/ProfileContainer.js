import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserThunk,
  signOutThunk,
  fetchUserIdThunk
} from "../../thunks";

import { Profile, UserView } from "../views";

class ProfileContainer extends Component {
  constructor(props) {
   
    super(props);
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchUserId(this.props.match.params.id);
    this.state = {
      
      user:[]
    };
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.setState({user:this.props.user})
  }
  handleSignout = (e) => {
    e.preventDefault();
    this.props.signOut();
    if(this.props.user.user_type=="user")
    this.props.history.push(`/login`);
    else if(this.props.user.user_type=="admin"){
      this.props.history.push(`/adminlogin`);
    }
  };
  render() {
    return (
      <Profile
      userId={this.props.userId}
        user={this.props.user}
        handleSignout={this.handleSignout}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    user: state.user,
    userId:state.userId.payload
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
     signOut:()=>dispatch(signOutThunk()),
     
	  fetchUserId:(id)=>dispatch(fetchUserIdThunk(id))
  };
};

export default connect(mapState, mapDispatch)(ProfileContainer);