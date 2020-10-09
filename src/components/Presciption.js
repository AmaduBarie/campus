import React from 'react';
 
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Medicine from './Medicines'
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        width:'fit-content',
        
      '& > *': {
        margin: theme.spacing(1),
        width: '65ch',
      },
    },
    cont:{
        display:'flex',
        flexWrap:'nowrap',
        flexDirection:'column',
        justifyContent:'center',
        paddingTop:35
    },
    notif:{
        cursor:'pointer',
        margin:'0em',
        marginTop:'10px',      
    }
    ,div:{
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
        ,flexDirection:'column',
        flexWrap:'nowrap',
        marginTop:'1em'
    },
    tarea:{
        width:'35em',

        resize:'none',
        position:'relative',
        marginBottom:'1em'
    }
  }));


export default function SimpleContainer() {
    const classes = useStyles();
   
    const [open, sopen] = React.useState( false);
      

      const detail =(e)=>{
          return(
            <Alert className={classes.notif} severity="info" onClick={()=>sopen(!open)}>
            <AlertTitle>Name:</AlertTitle>  
            <strong>Sickness: </strong> diabetes  
            <br/>
            <strong>Gender: </strong> male  
            <br/>
            <strong>Contact: </strong> male 
            <br/>
            <strong>Location: </strong> male 
             <br/>
            <strong>Age: </strong> 18 
            <Collapse in={open}>
            <Divider/>
          <div className={classes.div}>
           <strong>Prescribe  Medicine for pacient </strong> 
           <Medicine/>
          <strong>Pacient Advice </strong> 
          <TextareaAutosize
           rowsMax={20}
           rowsMin={10}
           className={classes.tarea}
           aria-label="maximum height"
           placeholder="Adivce to pacient"        
         />
    
          <Button variant="contained" color="primary" disableElevation>
                Send
          </Button>
          </div>
          </Collapse>
          </Alert>
          )
      }
   return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont}  maxWidth="sm">
    <Alert severity="warning">
     <AlertTitle>Pacients  </AlertTitle>
      these are <strong>pacient</strong> that need your attention
    </Alert>
     {detail('4')}
     </Container>
    </React.Fragment>
  );
}
