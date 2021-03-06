import { FormControl, InputLabel,Select as MuiSelect, MenuItem } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const {name,label,value,onChange,options} = props;
    console.log(options)
    return (
        <FormControl
        varient = "outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value="">Nome</MenuItem>
                {
                    options.map(
                        item  =>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)                  )
                }
            </MuiSelect>
        </FormControl>
    )
}
