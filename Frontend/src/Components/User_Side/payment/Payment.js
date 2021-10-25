
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';

import { Card, CardContent, Grid, Paper} from '@material-ui/core';
import {useForm,Form} from './Modals/useForm';
import Controls from './controls/Controls';
import axios from 'axios';
import { Box } from '@mui/system';
import { fabClasses, paperClasses } from '@mui/material';

const initialValues = {
    name: "",
    expiry: '',
    cardNo: '',
    cvv: ''
  }

  const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        flexDirection: "row",
      },
      largeIcon: {
        width: 160,
        height: 160,
      },
      title: {
        fontSize: 30,
        textAlign: "center",
      },
  }));

export default function Payment() {
    const {values,setValues,handleInputChange} = useForm(initialValues);
    const classes = useStyles();

    function handleSubmit(){};

    return (
        <Box display="inline-block">
            <Card>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Checkout
            </Typography>
            <Form onSubmit={handleSubmit} >
                <Grid container >
                    <Grid item xs={6} >
                            <Controls.Input
                            name = "name"
                            label= "Name"
                            value= {values.name}
                            onChange={handleInputChange}
                            /> 
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                            name = "expiry"
                            label= "DD/MM"
                            value= {values.expiry}
                            onChange={handleInputChange}
                            /> 
                        </Grid>
                    <Grid container > 
                        <Grid item xs={3}>
                            <Controls.Input
                            name = "cardNo"
                            label= "Card Number"
                            value= {values.cardNo}
                            onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                            name = "cvv"
                            label= "CVV"
                            value= {values.cvv}
                            onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid>
                        <div>
                            <Controls.Button
                                varient="contained"
                                type = "submit"
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
                </Grid>
              </Form>
            
            </CardContent>
            </Card>

        </Box>
    )
}
