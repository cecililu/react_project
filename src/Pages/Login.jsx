import { Box, Button, Grid, TextField, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import loginpic from './pic.JPG'
export const Login = () => {


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitted')
  }

  return (<>
  
       <Grid container spacing={1}>
        <Grid item >
           <Box>
            <img alt='login image' src={loginpic} />
           </Box>
        </Grid>
        <Grid item xs>
            <Box>
            <Typography  variant='h4' component='center' sx={{mt:5,fontSize:26, font:'Poppins'}} >
            Welcome to Jammy
            </Typography>
            <Box sx={{mt:6}}>
              <form onSubmit={handleSubmit}>
            <TextField  sx={{width:600,mx:15,my:1}} id="outlined-basic" label="Fullname" variant="outlined" />
           
            <TextField sx={{width:600,mx:15,my:1}} id="outlined-basic" label="Email" variant="outlined" />
           
            <TextField sx={{width:600,mx:15,my:1}}  id="outlined-basic" label="Password" variant="outlined" />
            
            
            <center><Button variant="outlined"  sx={{width:200,mx:15,my:2}} onClick={handleSubmit}>Create Account</Button></center>
            
            </form>
          
            <Typography  variant='h6' component='center' sx= {{fontSize:16}} >
            Already have an account <span><Link to='/'>Login</Link></span>
            </Typography>
            </Box>
          
            </Box>
        </Grid>
       
    </Grid>
 
    </>
  )
}
 