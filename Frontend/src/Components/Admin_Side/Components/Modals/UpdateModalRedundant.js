import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Paper} from '@material-ui/core';
import {useForm,Form} from './useForm';
import Controls from '../controls/Controls';
import * as bookService from '../../Services/BookService';
import axios from 'axios';

const initialValues = {
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

const typeItems = [
  {id: 'book', title: "Book"},
  {id: 'e-book', title: "eBook"},
]

const useStyles = makeStyles((theme) => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
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
}));

export default function UpdateModalRedundant(props) {
  console.log(props.load)
  const classes = useStyles();
  const {values,setValues,handleInputChange} = useForm(props.load);
  const {open, setOpen} = props;
  const [coverpic,setCoverpic] = useState(null);
  const [coverpic1,setCoverpic1] = useState(null);
  const [coverpic2,setCoverpic2] = useState(null);
  const [image1,setImage1] = useState(null);
  const [image2,setImage2] = useState(null);
  function handleClose(){
    setOpen(false);
  }

  const handlePicSelect = async(e) => {
    const file = e.target.files[0]
    var name = e.target.name;
    console.log(e.target)
    //console.log(file);
    const base64 = await convertBase64(file);
    ///console.log(base64);
    //values.coverpic=base64;
    console.log(name)
    if(name === "coverpic") setCoverpic(base64);
    if(name === "coverpic1") setCoverpic1(base64);
    if(name === "coverpic2") setCoverpic2(base64);
    if(name === "image1") setImage1(base64);
    if(name === "image2") setImage2(base64);
    
  }
  

  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = ()=>{
            resolve(fileReader.result);
        };
        fileReader.onerror = (error)=>{
            reject(error);
        }
    })
}

  function handleUpload(){
    console.log("inside Handle Uplod");
  }

  
  function handleSubmit(){
    console.log(coverpic);
    
    values.coverpic = coverpic;
    console.log(values);
    if(props.title === "update"){
      axios.put(`http://localhost:8080/admin/update-book/${props.id}`,values)
      .then(responce =>{
        console.log(responce);
      })
      .catch(error =>{
        console.log(error);
      })
    }else{
      axios.post("http://localhost:8080/admin/add-books",values)
      .then(responce =>{
        console.log(responce);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    setOpen(false);
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
          <Paper className={classes.pageContent}>
              <Form >
                <Grid container >
                  <Grid item xs={6} >
                    <Controls.Input
                      varient = "outlined"
                      name = "title"
                      label= "Title"
                      value= {values.title}
                      onChange={handleInputChange}
                    /> 
                    <Controls.Input
                      varient = "outlined"
                      name = "author"
                      label= "Author"
                      value= {values.author}
                      onChange={handleInputChange}
                    /> 
                    <Controls.Input
                      varient = "outlined"
                      name = "edition"
                      label= "Edition"
                      value= {values.edition}
                      onChange={handleInputChange}
                    />
                    <Grid container > 
                      <Grid item xs={3}>
                        <Controls.Input
                          varient = "outlined"
                          name = "price"
                          label= "Price"
                          value= {values.price}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controls.Input
                          varient = "outlined"
                          name = "totalNumber"
                          label= "Total"
                          value= {values.totalNumber}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid container>
                      <Grid container>
                      <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              name = "coverpic"
                              id="coverpic"
                              onChange={handlePicSelect}
                              multiple
                              type="file"
                            />
                            <label htmlFor="coverpic">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              color="secondary"
                              text="Upload"
                              onClick={handleUpload}
                              />
                            </label>
                        </Grid>
                        <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              onChange={handlePicSelect}
                              name = "coverpic1"
                              id="coverpic1"
                              multiple
                              type="file"
                            />
                            <label htmlFor="coverpic1">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              onClick={handleUpload}
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                        </Grid>
                      </Grid>
                      <Grid container>
                      <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              onChange={handlePicSelect}
                              name = "coverpic2"
                              id="coverpic2"
                              multiple
                              type="file"
                            />
                            <label htmlFor="coverpic2">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              onClick={handleUpload}
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                        </Grid>
                        <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              onChange={handlePicSelect}
                              name = "image1"
                              id="image1"
                              multiple
                              type="file"
                            />
                            <label htmlFor="image1">
                              <Controls.Button  
                              varient="contained"
                              component="span" 
                              onClick={handleUpload}
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                          </Grid>
                          <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              onChange={handlePicSelect}
                              name = "image2"
                              id="image2"
                              multiple
                              type="file"
                            />
                            <label htmlFor="image2">
                              <Controls.Button
                              varient="contained"
                              component="span"
                              onClick={handleUpload} 
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                          </Grid>
                      </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} >
                    <Controls.RadioGroup
                      name = "type"
                      label= "Type"
                      value = {values.type}
                      onChange={handleInputChange}
                      items= {typeItems}
                    />
                    <Controls.Select
                      name="category"
                      label="Category"
                      value={values.category}
                      onChange={handleInputChange}
                      options={bookService.getCategoriesCollection()}
                    />
                    
                    <Controls.DatePicker
                      name="publishDate"
                      label="Publish Date"
                      value={values.publishDate}
                      onChange={handleInputChange}
                    />
                    <Controls.Input
                        varient = "outlined"
                          name = "description"
                          label= "Description"
                          value= {values.description}
                          onChange={handleInputChange}
                      />
                    <div>
                      <Controls.Button
                        varient="contained"
                        onClick = {handleSubmit}
                        text="Submit"
                      />
                      <Controls.Button
                      varient="contained"
                        text="Reset"
                        color="default"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
