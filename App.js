
import './App.css';
import Navbar from './Components/Navbar';
import Middle from './Components/Middle';
import Body from './Components/Body';
 import Container from '@mui/material/Container';
 import Grid from '@mui/material/Grid';
 import Filterlayer from './Components/Filterlayer';

import {data} from './Components/data';

function App() {
  
  return (
    <>
    <Navbar/>
    <Container>
    <Middle/>
    <Filterlayer/>
    <Grid container spacing={5}>
     <Body/>
    </Grid>
    </Container>
    </>
    
  );
}

export default App;
