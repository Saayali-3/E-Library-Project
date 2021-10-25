import * as React from 'react';
import {useState, useEffect,useRef} from 'react';
import { styled } from '@mui/material/styles';
import Controls from './controls/Controls';

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import ReactScrollableFeed from "react-scrollable-feed"

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    height: 'calc(5% + 60px)',
    alignItems: 'center',
    boxSizing: 'border-box',
    gridRow: 'span 2'

  },
  section:{
    gridRow: 'span 5'
  }
}));



var stompClient = null;
var obj = {}

var messagesList = [
  {
    id: 0,
    type: 'Brunch this week?',
    content: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    sender: "dungen"
  },
  {
    id: 1,
    type: 'Brunch this week?',
    content: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    sender: "dungen"
  },
];

var messageId = 1;

function setMessageId(){
  messageId = messageId+1;
  return messageId 
}

console.log("Outside Chat")



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',

});

export default function Chat() {
  //const [messageId, setMessageId] = useState(1);
  const [messages, setMessages] = useState(messagesList);
  const classes = useStyles();

  const [message, setMessage] = useState('');
  const messageRef = useRef();

  const onChangeHandler = event => {
    setMessage(event.target.value);
  };

  
  var name = null;

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  },
  [messages])

  useEffect(()=>{
    connect()
  },[])
  
  function connect() {
    console.log("Inside Connected")
      var socket = new SockJS('http://localhost:8081/websocketApp');
      console.log("Socket Initialized")
      stompClient = Stomp.over(socket);
      console.log("Stomp Initialized")
      stompClient.connect({}, connectionSuccess);
      console.log("Stomp connexted")
    //event.preventDefault();
  }
  
  function connectionSuccess() {
    stompClient.subscribe('/topic/javainuse', onMessageReceived);
    
    stompClient.send("/app/chat.newUser", {}, JSON.stringify({
      sender : "Admin",
      type : 'newUser'
    }))
  
  }
  
  
  function sendMessage(event) {
    var messageContent = message;
    messageId = setMessageId()
    console.log(message,stompClient)
    if (messageContent && stompClient) {
      var chatMessage = {
        id: messageId,
        sender : "Admin",
        content : message,
        type : 'CHAT'
      };
  
      stompClient.send("/app/chat.sendMessage", {}, JSON
          .stringify(chatMessage));
          console.log(`${message} sent`)
          /*setMessages([
            ...messages,
            chatMessage
           ])
           messagesList.push(chatMessage);
           */
    }
    
    event.preventDefault();
  }
  
  function onMessageReceived(payload) {
    setMessageId(messageId+1);
    var message = JSON.parse(payload.body);
    console.log(message)
    var messageElement = document.createElement('li');
  
    if (message.type === 'newUser') {
      messageElement.classList.add('event-data');
      message.content = message.sender + 'has joined the chat';
    } else if (message.type === 'Leave') {
      messageElement.classList.add('event-data');
      message.content = message.sender + 'has left the chat';
    } else {
     /* messageElement.classList.add('message-data');
  
      var element = document.createElement('i');
      var text = document.createTextNode(message.sender[0]);
      element.appendChild(text);
  
      messageElement.appendChild(element);
  
      var usernameElement = document.createElement('span');
      var usernameText = document.createTextNode(message.sender);
      usernameElement.appendChild(usernameText);
      messageElement.appendChild(usernameElement);
      */
     obj = {id:messageId}
     message = { ...obj,...message }
     console.log(message);
     setMessages([
      ...messages,
      message
     ]
     )
     messagesList.push(message)
     console.log(messages)
    }
  
    var textElement = document.createElement('p');
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);
  
    messageElement.appendChild(textElement);
  
    //document.querySelector('#messageList').appendChild(messageElement);
    //document.querySelector('#messageList').scrollTop = document
        //.querySelector('#messageList').scrollHeight;
  
  }


  return (
    <div>
        <CssBaseline />
          <div className={classes.section}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Inbox
            </Typography>
                <List sx={{ mb: 2 }}>
                  {messages.map( (item) => (
                      <ListItem button key ={item.id} ref={messageRef}>
                        <ListItemAvatar>
                          <Avatar alt="Profile Picture"  />
                        </ListItemAvatar>
                        {console.log(messagesList)}
                        {console.log(`Inside List item: ${item}`)}
                        <ListItemText  primary={item.content} secondary={item.sender} />
                      </ListItem>
                  ))}
                </List>
          </div>
        <paperClasses className= {classes.footer}>
            <div style={{marginLeft: 'calc(1%)', backgroundColor: '#f1f3f4', borderRadius: '25px'}}>
            <Controls.Input 
                                    name = "message"
                                    label= "Send message"
                                    value= {message}
                                    onChange={onChangeHandler}
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                  />
                        <Controls.Button
                                    onClick={sendMessage}
                                    text="Send"
                                  />
            </div>
          </paperClasses>
    </div>
  );
}

