import React from 'react';
import { Fab, Zoom } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from '@material-ui/icons/Home';
import { Component } from "react";
import { connect } from "react-redux";
import {
    fetchUserThunk,
    signOutThunk,
  } from "../Authentication Part/thunks";
import './FloatingButton.css';
import { Link } from 'react-router-dom';

class FloatingButton extends Component  {
    constructor(props) {
   
        super(props);
        this.props.fetchUser(this.props.match.params.id);
        this.state = {
          
          user:[]
        };
      }
      componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
        this.setState({user:this.props.user})
      }


    render(){
        console.log(this.props.user)
    return (
        <div className="floating">
            <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
                <Link to="/home">
                    <Fab className="floating_button">
                        {/* <AddIcon className="floating_item"/> */}
                        <HomeIcon />
                    </Fab>
                </Link>
            </Zoom>
        </div>
    );
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

export default connect(mapState, mapDispatch)(FloatingButton);
