import { CatchingPokemon} from "@mui/icons-material"
import {AppBar, Toolbar,IconButton,Typography, Stack, Button} from "@mui/material"
import {Link} from "react-router-dom"
import React from 'react'

export const NavBar = () => {
  return (
  
    <AppBar position='static'>
      <Toolbar>
         <IconButton size="large" edge="start" color='inherit' aria-label="logo">
            <CatchingPokemon/>
          
         </IconButton >
         <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          React router Dom
         </Typography>
         <Stack direction='row' spacing={3}>
            
            <Button color='inherit'>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
              </Button>
            <Button color='inherit'>
             <Link to="about" style={{textDecoration:'none' ,color:'white'}}>About</Link>
              </Button>
            <Button color='inherit'>
            <Link to="contact" style={{textDecoration:'none',color:'white'}} >Contact us</Link>
            </Button>
            <Button color='inherit'>
            <Link to="login" style={{textDecoration:'none',color:'white'}} >Login</Link>
            </Button>
         </Stack>
      </Toolbar>
    </AppBar>
  )
}
