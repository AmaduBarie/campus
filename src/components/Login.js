import React,{useContext, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Context} from './data'
  
import TextField from '@material-ui/core/TextField';
 
import Button from '@material-ui/core/Button';
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
        paddingTop:55
    }
  }));


export default function SimpleContainer() {
    const classes = useStyles();
    const ctx = useContext(Context)
    const [usr,susr] = useState({n:'',p:'',code:''})
      const handleChange = (e) => {
        if(e.target.name==='u'){
            susr({...usr,n:e.target.value})
        }else{
            susr({...usr,p:e.target.value})
        }
         
      };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont}  maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
      <TextField value={usr.n} onChange={handleChange} id="standard-basic" name='u' label="Name or email" />
      <TextField value={usr.p} onChange={handleChange} id="standard-basic"   label="Password or pin code" />
     
        <Button onClick={()=>ctx.set({type:'login',payload:usr})} variant="contained" color="primary" disableElevation>
             login
         </Button>
         <p><strong>Name and Password: </strong>doctor</p>
         <br/>Or<br/>
         <p><strong>Name and Password: </strong>nurse</p>
       </form>

      </Container>
      
    </React.Fragment>
  );
}
