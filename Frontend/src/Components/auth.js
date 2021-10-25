import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserThunk, signOutThunk } from "./Authentication Part/thunks";

class Auth extends Component {
    constructor(props) {
      // super(props);
      this.props.fetchUser(this.props.match.params.id);
      this.state = {
        user:[]
      };
      this.authenticated = false;
      console.log(this.state.user);
    }
  
    login() {
      this.authenticated = true;
    }
  
    logout() {
      this.authenticated = false;
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    // set_User(user) {
    //     this.present_user = user;
    //     console.log(this.present_user);
    //     console.log(user);
    // }

    tell_User() {
        return this.present_user;
    }
  }

  const mapState = (state) => {
    return {
      user: state.user,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      fetchUser: (id) => dispatch(fetchUserThunk(id)),
       signOut:()=>dispatch(signOutThunk()),
    };
  };
  
  export default connect(mapState, mapDispatch)(Auth);
  