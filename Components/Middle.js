import React from 'react'
import  Typography  from '@mui/material/Typography'
import Grid  from '@mui/material/Grid'
import { InputUnstyled } from '@mui/base';





function Middle() {
  return (
   <Grid conatiner sx={{display:"flex", justifyContent:"space-between", marginY:"2rem"}}>
     <Grid item>
      <Typography variant="h4" componet="h3">Search property for rent</Typography>
     </Grid>
    <Grid item >
     
      <InputUnstyled sx={{border:"1px solid",borderRadius:"8px",backgroundcolor:"red"}} placeholder="Search by search bar..."></InputUnstyled>
    
     
    </Grid>

   </Grid>
  )
}

export default Middle