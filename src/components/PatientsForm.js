import React,{useContext} from 'react';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import {Context} from './data'
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
    const ctx = useContext(Context)

      const handleChange = (event) => {
        
        setState(event.target.value);
      };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont}  maxWidth="sm">
      {!ctx.getsign.success   && <Alert severity="info">
        <AlertTitle>Patient Information Form</AlertTitle>        
      </Alert>}
      {ctx.getsign.success && <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
          <strong>Name:</strong><br/>
          <strong>Pin code:</strong>pin here
      </Alert>}
      
    

      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
      
      <TextField id="standard-basic" label="Age" />
      <TextField id="standard-basic" label="Contact" />
      <TextField id="standard-basic" label="Weight" />

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
 
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Sickness</InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
        
        >
          <option aria-label="None" value="" />

          {/* Allergists/Immunologists */}
          <option value='Asthma'>Asthma</option>
          <option value='Eczema' >Eczema</option>
          <option value='Food allergies'>Food allergies</option>           
          <option value='Insect sting allergies'>Insect sting allergies</option>
          <option value='Some autoimmune diseases' >Some autoimmune diseases</option>
          
          {/* Anesthesiologists */}
          <option value='Pain'>Pain</option>
          <option value='Childbirth' >Childbirth</option>
          

          {/* Cardiologists */}
          <option value='Heart failure'>Heart failure</option>           
          <option value='Heart attack'>Heart attack</option>
          <option value='High blood pressure' >High blood pressure</option>
          <option value='Irregular heartbeat' >Irregular heartbeat</option>
          
          {/* Colon and Rectal Surgeons */}
          <option value='Cancer'>Cancer</option>           
          <option value='Inflammatory bowel disease'>Inflammatory bowel disease</option>
          

             {/* Critical Care Medicine Specialists */}
          <option value='Accident'>Accident</option>           
        
          {/* Dermatologists */}
          <option value='Skin'>Skin disease</option>
          <option value='Hair' >Hair disease</option>
        
          {/* Endocrinologists */}
          <option value='Diabetes' >Diabetes</option>
          <option value='Bone' >Bone disease</option>
          

          {/* Emergency Medicine Specialists */}
          <option value='Life-or-death decisions' >Life-or-death decisions</option>
          
          {/* Family Physicians */}
          <option value='Family Physicians' >Family Physicians</option>
          

          {/* Gastroenterologists */}
          <option value='Stomach' >Stomach</option>
          <option value='Bowels' >Bowels</option>
          <option value='Pancreas' >Pancreas</option>
          <option value='Liver' >Liver</option>
          <option value='Gallbladder' >Gallbladder</option>
        
         
        </Select>
      </FormControl> 

    
     
        <Button  variant="contained" color="primary" disableElevation>
             Signup
         </Button>
       </form>

      </Container>
    </React.Fragment>
  );
}
