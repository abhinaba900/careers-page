import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import TopSectionJoinUs from "./Components/TopSectionJoinUs";
import CompanyValues from "./Components/CompanyValues";
import GLOBALPRESENCE from "./Components/GLOBALPRESENCE";
import BecomeOneOfUs from "./Components/BecomeOneOfUs";
import WhyEmploySec from "./Components/WhyEmploySec";
import WhyEmploySecSlider from "./Components/WhyEmploySecSlider";
import BenifitsOfWorking from "./Components/BenifitsOfWorking";

function App() {
  return (
    <Box className="App">
      <TopSectionJoinUs />
      <Box w={"90%"} m={"auto"}>
        <CompanyValues />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <GLOBALPRESENCE />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <BecomeOneOfUs />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <WhyEmploySec />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <WhyEmploySecSlider />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <BenifitsOfWorking />
      </Box>
    </Box>
  );
}

export default App;
