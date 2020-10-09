import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { Alert, AlertTitle } from '@material-ui/lab';

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
        flexWrap:'nowrap',
        flexDirection:'column',
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
      <Alert severity="info">
        <AlertTitle>Doctors Form</AlertTitle>
        
      </Alert>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
       <TextField id="standard-basic" label="Contact" />
     

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}        
        >
          <option aria-label="None" value="" />
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Expertise </InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
        
        >
          <option aria-label="None" value="" />
          <option value='Allergists/Immunologists'>Allergists/Immunologists</option>
          <option value='Anesthesiologists'>Anesthesiologists</option>
          <option value='Cardiologists'>Cardiologists</option>
          <option value='Colon and Rectal Surgeons'>Colon and Rectal Surgeons</option>
          <option value='Critical Care Medicine Specialists'>Critical Care Medicine Specialists</option>
          <option value='Dermatologists'>Dermatologists</option>
          <option value='Endocrinologists'>Endocrinologists</option>
          <option value='Emergency Medicine Specialists'>Emergency Medicine Specialists</option>
          <option value='Family Physicians'>Family Physicians</option>
          <option value='Gastroenterologists'>Gastroenterologists</option>
        
        </Select>

      </FormControl>
  
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Location </InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
        
        >
          <option aria-label="None" value="" />
          <option value='Kabala'>Kabala</option>
          <option value='Makeni'>Makeni</option>
          <option value='Freetown'>Freetown</option>
          <option value='Bo'>Bo</option>
          <option value='Bonthe'>Bonthe</option>
          <option value='Moyamba'>Moyamba</option>
          <option value='Pujehun'>Pujehun</option>
          <option value='Port Loko'>Port Loko</option>
          <option value='Kenema'>Kenema</option>
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
