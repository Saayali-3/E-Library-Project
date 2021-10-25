import { TextField } from '@material-ui/core';
import React from 'react'

export default function Input(props) {
    const {name,label,value,onChange,varient,InputProps} = props;
    return (
        <TextField
                    variant = {varient}
                    label = {label}
                    name = {name}
                    value = {value}
                    onChange={onChange}
                    InputProps={InputProps}
                    /> 
    )
}
