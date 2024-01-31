import React, { useState } from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import Mainimage from "../images/Group 4860.png";

function WorldMap() {
  const [isOpenIndia, setIsOpenIndia] = useState(false);
  const [isOpenUsa, setIsOpenUsa] = useState(false);
  const [isOpenCanada, setIsOpenCanada] = useState(false);
  return (
    <Box
      aspectRatio={"3/2"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-between" }}
      gap={"1em"}
      mt={"1em"}
    >
      <Box w={"50%"}  position={"relative"} objectFit={"cover"}>
        <Image
          w={"40.75em"}
          objectFit={"contain"}
          src={Mainimage}
          alt="world map"
        />
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        textAlign={"center"}
        p={"1em"}
        gap={"1em"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading color={"#525252"} fontWeight={"bold"} fontSize={"1.875em"}>
          WORLD MAP
        </Heading>
        <Text color={"#525252"} fontWeight={"medium"} fontSize={"0.75em"}>
          Click on the map location or Country text
        </Text>
        <Box textAlign={"left"} w={"100%"} mt={"1em"}>
          <Heading
            onClick={() => {
              setIsOpenIndia(!isOpenIndia);
              setIsOpenUsa(false);
              setIsOpenCanada(false);
            }}
            borderBottom={"2px solid #525252"}
            fontSize={"1em"}
            p={"0.5em"}
            color={"#525252"}
          >
            INDIA
          </Heading>
          {isOpenIndia && <Text>INDIA</Text>}
        </Box>
        <Box textAlign={"left"} w={"100%"} mt={"1em"}>
          <Heading
            onClick={() => {
              setIsOpenUsa(!isOpenUsa);
              setIsOpenIndia(false);
              setIsOpenCanada(false);
            }}
            borderBottom={"2px solid #525252"}
            fontSize={"1em"}
            p={"0.5em"}
            color={"#525252"}
          >
            USA
          </Heading>
          {isOpenUsa && <Text>USA</Text>}
        </Box>
        <Box textAlign={"left"} w={"100%"} mt={"1em"}>
          <Heading
            onClick={() => {
              setIsOpenCanada(!isOpenCanada);
              setIsOpenIndia(false);
              setIsOpenUsa(false);
            }}
            borderBottom={"2px solid #525252"}
            fontSize={"1em"}
            p={"0.5em"}
            color={"#525252"}
          >
            CANADA
          </Heading>
          {isOpenCanada && <Text>CANADA</Text>}
        </Box>
      </Box>
    </Box>
  );
}

export default WorldMap;
