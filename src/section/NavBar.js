import { CatchingPokemon} from "@mui/icons-material"
import {AppBar, Toolbar,IconButton,Typography, Stack, Button} from "@mui/material"
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
         <Stack direction='row' spacing={2}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Contact</Button>
         </Stack>
      </Toolbar>
    </AppBar>
  )
}
