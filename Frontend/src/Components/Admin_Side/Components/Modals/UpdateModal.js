import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Controls from '../controls/Controls';
import { Grid } from '@material-ui/core';
import {useForm} from './useForm';
import axios from 'axios';
import AddModal from './AddModal';
import UpdateModalRedundant from './UpdateModalRedundant';

const initialValues = {
  id: 0,
  title: '',
  author: '',
  edition: '',
  type: '',
  price: 0,
  publishDate: new Date(),
  edition: '',
  totalNumber: "",
  category: "",
  description: "",
  coverpic: "",
  coverpic1: "",
  coverpic2: "",
  image1: "",
  image2: ""
}

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
  const [openAdd,setOpenAdd] = useState(false);
  const {values,setValues,handleInputChange} = useForm(null);

  const classes = useStyles();
  const [id, setId] = useState('');
  const {open, setOpen} = props;

  const onChangeHandler = event => {
    setId(event.target.value);
  };
  function handleClose(){
    setOpen(false);
  }

  function handleSubmit(){
    console.log(id)
    axios.get(`http://localhost:8080/admin/get-book/${id}`)
    .then(response =>{
      console.log(response.data);
      setValues(response.data);
      console.log(values)
    })
    .catch(error =>{
      console.log(error);
    })
    setOpen(false);
    setOpenAdd(true);
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
            <h2 className={classes.heading}>Update modal</h2>
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
                                text="Update"
                              />
                  </Grid>
              </Grid>
          </div>
        </Fade>
      </Modal>
        {values?
        (
          <UpdateModalRedundant
        open = {openAdd}
        setOpen = {setOpenAdd}
        load = {values}
        title = "update"
        id = {id}
      >
      </UpdateModalRedundant>
        ):(
          <div></div>
        )
      }
      
    </div>
  );
}
