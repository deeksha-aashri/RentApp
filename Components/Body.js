import React, { useEffect } from 'react'
import { useState } from 'react';
import {data} from './data'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import Divider from '@mui/material/Divider';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
function Body() {
   
    let result=data["hotels"]; //[{},{},{}]
    const [card,setCard]=useState(result);
  return (
    <>
    {card.map((obj)=>(
      <Grid item xs={4} spacing={3} className="card"> 
    <Paper elevation={3}>
     <img src={obj.thumbNailUrl} className="img"/> 
     <Box sx={{padding:"2rem"}}>
      <Grid container>
        <Grid item xs={10}><Typography variant ="h6" component="h3"className='price'>{obj.price} </Typography></Grid>
        <Grid item xs={2}>
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}></Checkbox>
        </Grid>
      </Grid>
     <Typography  variant="h6" component="h2">{obj.name}</Typography>
     <Typography>{obj.address1}</Typography>
     <Divider light sx={{marginY:"1rem"}}/>
     <Grid container sx={{marginY:"1rem"}}>
      <Grid item xs={4} sx={{color:"purple"}}>< BedIcon/ ></Grid>
      <Grid item xs={4} sx={{color:"purple"}}><BathtubIcon/></Grid>
      <Grid item xs={4} sx={{color:"purple"}}><DinnerDiningIcon/></Grid>
     </Grid>
     </Box>
    </Paper>
    </Grid>
    ))}
    </>




    // <Grid item xs={4} spacing={3}> 
    // <Paper elevation={3}>
    //  <img src={data["hotels"][1].thumbNailUrl} className="img"/> 
    //  <Box sx={{padding:"2rem"}}>
    //   <Grid container>
    //     <Grid item xs={10}><Typography variant ="h6" component="h3"className='price'>{data["hotels"][1]["price"]}</Typography></Grid>
    //     <Grid item xs={2}>
    //       <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}></Checkbox>
    //     </Grid>
    //   </Grid>
    //  <Typography  variant="h6" component="h2">{data["hotels"][1].name}</Typography>
    //  <Typography>{data["hotels"][0].address1}</Typography>
    //  </Box>
    // </Paper>
    // </Grid>
  )
   
   
  
}

export default Body