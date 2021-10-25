import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Controls from '../controls/Controls';
import { initialValues } from '../../Services/BookAttributes';
import { useForm } from './useForm';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  heading:{
    textAlign: "center"
  },
}));

export default function DeleteModal(props) {
  const classes = useStyles();
  const {open, setOpen} = props;
  //const {values,setValues,handleInputChange} = useForm(initialValues);
  const [id, setId] = useState('');
  function handleClose(){
    setOpen(false);
  }
  const onChangeHandler = event => {
    setId(event.target.value);
  };
  function handleSubmit(){
    console.log(id)
    axios.delete(`http://localhost:8080/admin/delete-books/${id}`)
    .then(response =>{
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.heading}>Delete modal</h2>
              <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                  <Grid item xs={3}>
                    <Controls.Input
                                name = "id"
                                label= "Id"
                                value= {id}
                                onChange={onChangeHandler}
                              />
                    <Controls.Button
                                onClick={handleSubmit}
                                text="Delete"
                              />
                  </Grid>
              </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
