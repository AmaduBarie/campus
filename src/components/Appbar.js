import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import {Context} from './data'
 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth:'100%',
   width:'fit-content'
  },
  link: {
    color:'black',
    textDecoration:'none !important'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
 const ctx = useContext(Context)
 const [anchorEl, setAnchorEl] = React.useState(null);

 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar  position="sticky">
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           {ctx.get.code && <MenuIcon  />} 
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ehealth 
          </Typography>    
          <Button size='small' variant="text" color="inherit">{ctx.get['name']?ctx.get['name']:'Signup'} </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       {ctx.get.code!=='P' && ctx.get.code !== 'N' && <Link to='/nurse' className={classes.link} ><MenuItem onClick={handleClose}>Register a nurse</MenuItem></Link>} 
       {ctx.get.code === 'N' && <Link to='/pacient' className={classes.link} ><MenuItem onClick={handleClose}>Register a pacient</MenuItem></Link>} 
        <Link to='/' className={classes.link} ><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
       
      </Menu>
    </div>
  );
}
