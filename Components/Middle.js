
import  Typography  from '@mui/material/Typography'
import Grid  from '@mui/material/Grid'
import React from 'react'
import Input  from '@mui/material/Input'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  InputLabel  from '@mui/material/InputLabel';




function Middle() {
  return (
   <Grid conatiner sx={{display:"flex", justifyContent:"space-between", marginY:"2rem"}}>
     <Grid item>
      <Typography variant="h4" componet="h3">Search property for rent</Typography>
     </Grid>
    <Grid item>
     
      <FormControl sx={{ width:"15rem"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Search by search bar...</InputLabel>
        <Select
         label="Search bar..."
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    
     
    </Grid>

   </Grid>
  )
}

export default Middle