import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import TopSectionJoinUs from './Components/TopSectionJoinUs';
import CompanyValues from './Components/CompanyValues';

function App() {
  return (
    <Box className="App">
      <TopSectionJoinUs />
      <Box w={"90%"} m={"auto"}>
        <CompanyValues />
      </Box>
    </Box>
  );
}

export default App;
