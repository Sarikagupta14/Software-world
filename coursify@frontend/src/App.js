import './App.css';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';



function App() {
  return (
    <Box className="App">
      {/* hi */}
      <Box h={{base:"100px",md:"53px"}}><Navbar/></Box>
      <AllRoutes/>
      <Footer/>
     
    </Box>
  );
}

export default App;
