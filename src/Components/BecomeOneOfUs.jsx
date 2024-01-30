import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
function BecomeOneOfUs() {
  return (
    <Box
      display={"flex"}
      flexDirection={{
        base: "column",
        md: "row",
        lg: "row",
        xl: "row",
        xxl: "row",
      }}
      alignItems={"center"}
      height={"60vh"} // Adjusted to 300vh
      className="top-section-join-us"
      position="relative"
    >
      <Box
        w={"100%"}
        h={"100%"}
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
      >
        <Image
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZkb5hvshWdPOVkfmj_4uLjOOEHlcy6QWFN5UVqZ7C9Z_fwPGc"
          alt="background image"
        />
      </Box>

      <Box
        w={["100%", "100%", "60%", "40%"]}
        p={["1.25em", "4em"]}
        color={"white"}
        fontFamily={"Poppins"}
        fontWeight={"Montserrat, Bold"}
        lineHeight={"1.9"}
      >
        <Heading>JOIN US</Heading>
        <Text fontFamily={"Poppins, Regular"} fontSize={"0.9em"}>
          Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
          enim ad minim veniam, quis nostrud
        </Text>
        <Button
          bg={"#ED1C24"}
          dropShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          color={"white"}
          w={"10em"}
          h={"3em"}
          mt={"2em"}
        >
          APPLY
        </Button>
      </Box>
    </Box>
  );
}

export default BecomeOneOfUs;
