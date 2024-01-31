import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import FirstImg from "../images/Healthcare.png";
import SecondImg from "../images/Tome off.png";
import ThirdImg from "../images/istockphoto-1184609474-612x612.png";
import FourthImg from "../images/Benefits_of_Retirement_Planning-1.png";
import FifthImg from "../images/Snacking-in-Australia-Consumption-of-healthy-options-up-but-savoury-snacks-still-in-the-lead.png";
import FirstLogo from "../images/Screenshot 2024-01-31 104543.png";
import SecendLogo from "../images/Group 4880.png";
function BenifitsOfWorking() {
  return (
    <Box mt={"1em"} aspectRatio={"3/2"}>
      <Box textAlign={"center"} mt={"1em"}>
        <Heading color={"#EC1C24"} fontWeight={"bold"} fontSize={"1.875em"}>
          BENEFITS OF WORKING WITH HOS
        </Heading>
      </Box>
      <Box mt={"1em"}>
        <Box display={"flex"} gap={"1em"} position={"relative"}>
          <Box>
            <Image src={FirstImg} alt="first image" />
            <Box
              position={"absolute"}
              top={{ base: "61%", md: "60%" }}
              display={{ base: "none", md: "none", lg: "flex" }}
              left={"39%"}
            >
              <Image
                w={{ base: "30%", md: "100%" }}
                h={"100%"}
                css={{
                  "::-webkit-backface-visibility": "hidden",
                  "::-ms-transform": "translateZ(0)",
                  "::-webkit-transform": "translateZ(0)",
                  "transform": "translateZ(0)",
                }}
                src={FirstLogo}
              />
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image src={SecondImg} alt="second image" />
            <Box
              w={"15em"}
              h={"6em"}
              position={"absolute"}
              backgroundColor={"white"}
              top={"65%"}
              left={"40%"}
              display={{ base: "none", md: "none", lg: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1em"}
            >
              <Image src={SecendLogo} alt="second image" />
              <Text fontWeight={"bold"} fontSize={"1.25em"}>
                TIME OFF
              </Text>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} gap={"1em"} mt={"1em"}>
          <Box position={"relative"}>
            <Image src={ThirdImg} alt="second image" />
            <Box
              w={"15em"}
              h={"6em"}
              position={"absolute"}
              backgroundColor={"white"}
              top={"63%"}
              left={"4%"}
              display={{ base: "none", md: "none", lg: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1em"}
            >
              <Image src={SecendLogo} alt="second image" />
              <Text fontWeight={"bold"} fontSize={"1.25em"}>
                FLEXIBLE WORK SCHEDULES
              </Text>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image src={FourthImg} alt="second image" />
            <Box
              w={"15em"}
              h={"6em"}
              position={"absolute"}
              backgroundColor={"white"}
              top={"63%"}
              left={"4%"}
              display={{ base: "none", md: "none", lg: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1em"}
            >
              <Image src={SecendLogo} alt="second image" />
              <Text fontWeight={"bold"} fontSize={"1.25em"}>
                RETIREMENT BENEFITS
              </Text>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Image src={FifthImg} alt="second image" />
            <Box
              w={"15em"}
              h={"6em"}
              position={"absolute"}
              backgroundColor={"white"}
              top={"63%"}
              left={"4%"}
              display={{ base: "none", md: "none", lg: "flex" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1em"}
            >
              <Image src={SecendLogo} alt="second image" />
              <Text fontWeight={"bold"} fontSize={"1.25em"}>
                SNACK PROVISION
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BenifitsOfWorking;
