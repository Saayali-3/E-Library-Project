import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Appbar from './Components/AppBar';
import Container from '@material-ui/core/Container';
import Card from './Components/Card';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Chat from './Components/Chat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CustomizedTables from './Components/Table'

function Admin() {
    return (
        <div>
            <Appbar/>
            <Container>
                
                <Card icon={Add} title = "Add Books"/>
                <Card icon={DeleteIcon} title = "Delete Books"/>
                <Card icon={UpdateIcon} title="Update Database"/>
                <Card icon={VerifiedUserIcon} title="Verify User"/>
                <Card icon={ChatIcon} title="Messages"/>
                <Card icon={ThumbUpIcon} title="Approve Donations"/>

                {/* <Chat/> */}
                
            </Container>
        </div>
    )
}

export default Admin
