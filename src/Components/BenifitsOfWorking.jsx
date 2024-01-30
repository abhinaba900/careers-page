import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FirstImg from "../images/Healthcare.png";
import SecondImg from "../images/Tome off.png";
function BenifitsOfWorking() {
  return (
    <Box mt={"1em"}>
      <Box textAlign={"center"} mt={"1em"}>
        <Heading color={"#EC1C24"} fontWeight={"bold"} fontSize={"1.875em"}>
          BENEFITS OF WORKING WITH HOS
        </Heading>
      </Box>
      <Box mt={"1em"}>
        <Box display={"grid"} gridAutoColumns={"2fr 1fr"} gap={"2em"}>
          <Box>
            <Image w={"62.5em"} h={"25.5em"} src={FirstImg} alt="first image" />
            <Box>
              <Image />
              <Text></Text>
            </Box>
          </Box>
          <Box>
            <Image src={SecondImg} alt="second image" />
            <Box>
              <Image />
              <Text></Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Image />
            <Text></Text>
          </Box>
          <Box>
            <Image />
            <Text></Text>
          </Box>
          <Box>
            <Image />
            <Text></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BenifitsOfWorking;
