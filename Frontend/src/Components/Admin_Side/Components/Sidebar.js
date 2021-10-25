import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { createMuiTheme } from "@material-ui/core/styles";
import Chat from "./Chat"
import { createTheme,ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'blue'
    },
  Drawer:{
    '& .MuiPaper-root':{
    width: '25%',
    borderRadius: '10px',
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '1%',
    fontSize: '0.8rem',
    bottom: '1%'
    }
  }
});


const theme = createTheme({
  palette:{
    primary:{
      main: '#f00'
    }
  },
  shape: {
    borderRadius: 4,
  },
});

export default function TemporaryDrawer(props) {
  const {state, setState} = props;
  const classes = useStyles();
  const customTheme = createTheme({
    overrides: {
      MuiContainer: {
        root: {
          border: "1px solid black",
          width: 80,
          height: 80,
          borderRadius: 4,
        }
      }
    }
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
        <Drawer
            className={classes.Drawer}
            anchor='right'
            open={state}
            onClose={toggleDrawer('right', false)}
            theme={theme}
            
          >
            <Chat />

          </Drawer>
        
          
  );
}