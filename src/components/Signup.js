import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
    cont:{
        display:'flex',
        justifyContent:'center',
        paddingTop:35
    }
  }));


export default function SimpleContainer() {
    const classes = useStyles();
    const [state, setState] = React.useState( );

      const handleChange = (event) => {
        
        setState(event.target.value);
      };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont}  maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
        
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">I'm a </InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
        
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

      <TextField id="standard-basic" label="Password" />
      <TextField id="standard-basic" label="Verify Password" />
     
     
        <Button variant="contained" color="primary" disableElevation>
             Signup
         </Button>
       </form>

      </Container>
    </React.Fragment>
  );
}
