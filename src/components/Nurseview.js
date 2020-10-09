import React from 'react'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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
        justifyContent:'flex-start'
        ,flexDirection:'row',
        flexWrap:'nowrap',
        marginTop:'1em'
    },
 
  }));


export default function SimpleContainer() {
    const classes = useStyles();
   
 

      const detail =(e)=>{
          return(
         <div>
          <Alert variant="outlined" severity="success" className={classes.div}>
            <AlertTitle>Name:</AlertTitle>  
            <strong>Sickness: </strong> diabetes  
            <br/>
            <strong>Contact: </strong> male 
            <br/>
            <strong>Pin code: </strong> male  
            <br/>
            <strong>Status: </strong> prescribed  
          </Alert>
          <Alert variant="outlined" severity="error" className={classes.div}>
          <AlertTitle>Name:</AlertTitle>  
            <strong>Sickness: </strong> diabetes  
            <br/>
            <strong>Contact: </strong> male 
            <br/>
            <strong>Pin code: </strong> male 
            <br/>
            <strong>Status: </strong>not prescribed  
           </Alert>
         </div>
          
          )
      }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont}  maxWidth="sm">

    <Alert severity="info">
     <AlertTitle>Pacients  </AlertTitle>
      these are <strong>pacients</strong> who have been attended to or not
    </Alert>
     {detail('4')}
     </Container>
    </React.Fragment>
  );
}
