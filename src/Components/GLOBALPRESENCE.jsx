import React from "react";
import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import BackgroundImage from "../images/Group 3501.png";
import GroupoIcon from "../images/Group 4777.png";

function GLOBALPRESENCE() {
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      mt={"5%"}
      mb={"5%"}
      position={"relative"}
      gap={"6%"}
    >
      <Box
        p={{ base: "2%", md: "2%" }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        position={"relative"}
        top={0}
        mt={0}
        pt={{ base: "0", md: "0" }}
      >
        {" "}
        {/* Adjusted percentage for padding */}
        <Heading
          fontSize={{ base: "2.5em", md: "2.5em" }}
          fontWeight="bold"
          color={"#EC1C24"}
        >
          GLOBAL PRESENCE
        </Heading>
        <Text
          fontWeight={"regular"}
          color={"#525252"}
          w={{ base: "100%", md: "70%" }}
          mt="2%"
          fontSize={{ base: "1em", md: "1.1em" }}
        >
          If you're ready to take the next step in your career, join us at HOS
          and be part of a team that shapes the future. When you join us, you're
          not just taking a job; you're becoming a part of a dynamic company
          that's committed to growth. HOS team creates solutions that impact
          industries and drive change. With opportunities for continuous
          learning, exciting projects that challenge the norm, and a culture
          that values both your professional and personal well-being.
        </Text>
      </Box>
      <Stack
        direction={{ base: "row", md: "row" }}
        spacing="4%"
        p="2%"
        w={{ base: "100%", md: "80%" }}
        m={"auto"}
      >
        {["INDIA", "CANADA", "UNITED STATES OF AMERICA"].map((country) => (
          <Box
            key={country}
            textAlign="center"
            display={"flex"}
            flexDirection={{ base: "row", md: "row" }}
            alignItems={"center"}
            m={"auto"}
            gap={"2%"}
          >
            <Image
              src={GroupoIcon}
              aspectRatio={"3/2"}
              w={{ base: "auto", md: "2em" }}
              h={{ base: "auto", md: "2em" }}
              mx="auto"
            />
            <Heading
              fontWeight={"semi-bold"}
              color={"#525252"}
              opacity={"100%"}
              fontSize={{ base: "0.5em", md: "1em" }}
            >
              {country}
            </Heading>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default GLOBALPRESENCE;
