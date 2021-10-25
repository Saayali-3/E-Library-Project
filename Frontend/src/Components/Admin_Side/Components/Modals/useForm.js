import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

export function useForm(initialValues) {

    const [values,setValues] = useState(initialValues);

    const handleInputChange= e=>{
        console.log("inside handleInputChange")
        const {name,value} = e.target
        console.log(value)
        setValues({
          ...values,
          [name]: value,
        })
      }
      
      console.log(values);

    return {
        values,
        setValues,
        handleInputChange
    }

}


    const useStyles = makeStyles((theme) => ({
        root:{
          '& .MuiFormControl-root': {
            width:'80%',
            margin: theme.spacing(1),
          }
        },
  
      }));
export function Form(props) {

    const classes = useStyles();

    const {children, ...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}


