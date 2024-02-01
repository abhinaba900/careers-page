import { Box, Image, Heading } from "@chakra-ui/react";
import React from "react";
import logoImage from "../images/HOS logo.png";
import styled from "styled-components";


const AnimatedHeading = styled.h1`
  font-size: 1em;
  color: #525252;
  font-weight: bold;
  position: relative; /* Needed for pseudo-element positioning */
  overflow: hidden; /* Ensures the pseudo-element is contained within the Heading */

  &:hover {
    color: #ec1c24;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ec1c24;
    animation: slideIn 0.5s ease-in-out forwards;
  }

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

function Navbar() {
  return (
    <Box
      background={"#FFFFFF"}
      h={"4em"}
      position={"relative"}
      display={"flex"}
      justifyContent={"space-between"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
      <Box w={"16em"} position={"absolute"} left={"3%"} top={"40%"}>
        <Image objectFit={"contain"} src={logoImage} alt="logo" />
      </Box>
      <Box
        position={"absolute"}
        right={"3%"}
        display={"flex"}
        top={"30%"}
        justifyContent={"space-between"}
        gap={"1em"}
        alignItems={"center"}
      >
        <AnimatedHeading>ABOUT US</AnimatedHeading>
        <AnimatedHeading >
          OUR BRANDS
        </AnimatedHeading>
        <AnimatedHeading >
          MEDIA
        </AnimatedHeading>
        <AnimatedHeading >
          COLLABORATE
        </AnimatedHeading>
        <AnimatedHeading >
          CAREERS
        </AnimatedHeading>
        <AnimatedHeading >
          CONTACT US
        </AnimatedHeading>
      </Box>
    </Box>
  );
}

export default Navbar;
