
import './App.css';
import Navbar from './Components/Navbar';
import Middle from './Components/Middle';
import Body from './Components/Body';
 import Container from '@mui/material/Container';
 import Grid from '@mui/material/Grid';
 import Filterlayer from './Components/Filterlayer';
import context from './Components/Context';

import {data} from './Components/data';
import { useState } from 'react';

function App() {
  const [type,setType]=useState("house");
  return (
    <>
    <Navbar/>
    <Container>
      <context.Provider value={type}>
    <Middle/>
    <Filterlayer/>
    <Grid container spacing={5}>
     <Body/>
    </Grid>
    </context.Provider >
    </Container>
    </>
    
  );
}

export default App;
