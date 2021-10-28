import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';

import { connect } from "react-redux";

import {editUserThunk,fetchAllUsersThunk,fetchUserIdThunk } from "../../Authentication Part/thunks";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
  root: {
 
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



class ButtonAppBar extends React.Component {
 
  constructor(props) {
    console.log(props)
		super(props);
    this.props.fetchUserId(this.props.user.id)
		this.state = { userEntity:[],
			userId:0
	};
	}

render(){
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Link to={{pathname: `/view_profile/${this.props.userId}`}}  style={{paddingLeft:'1099px', textDecoration: 'none', color:'white'}} >
          Profile
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

const mapState = (state) => {
	console.log(state)
	
	return {
		allUsers: state.allUsers,
		user:state.user,
		userId:state.userId.payload
	  };
	
  };
  const mapDispatch = (dispatch, ownProps) => {
	return {
	  fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
      editUserEntity:(user)=> dispatch(editUserThunk(user)),
	  fetchUserId:(id)=>dispatch(fetchUserIdThunk(id))
	 // addUser: (User) => dispatch(addUserThunk(User, ownProps)),
	 // addUserEntity: (userEntity) => dispatch(addUserEntityThunk(userEntity, ownProps)),
	};
  }; 
export default connect(mapState, mapDispatch)(ButtonAppBar);