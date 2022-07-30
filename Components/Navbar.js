import React from 'react'
import { Button, Toolbar, ButtonGroup } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: "white" }} position="stick"y>
      <Toolbar>
        <Grid container>
         
          
          <Grid item xs={10}>
           
          <Button color="secondary"> <OtherHousesIcon/><Typography sx={{color:"black"}}>Estatery</Typography></Button>
        <Button color="secondary">Rent</Button>
        <Button sx={{ color: "black" }}>Buy</Button>
        <Button sx={{ color: "black" }}>Sell</Button>
        <Button sx={{ color: "black" }}>Manage Property<KeyboardArrowDownIcon/></Button>
        <Button sx={{ color: "black" }}>Resources<KeyboardArrowDownIcon/></Button>
          </Grid>

          <Grid item xs={2}>
          <Button outlined color='secondary'>Login</Button>
          <Button variant='contained' color='secondary'>Sign up</Button>
          </Grid>
          
         

       
          </Grid>
        
       
        
       
        </Toolbar>

    </AppBar>

  )
}

export default Navbar