import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
function WhyEmploySec() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"center"}
      p={"2%"}
      gap={"2%"}
      mt={"3%"}
      mb={"5%"}
    >
      <Heading
        fontSize={{ base: "1.25em", md: "1.875em" }}
        color={"#EC1C24"}
        fontWeight={"bold"}
      >
        WHY EMPLOYEES LOVE WORKING AT HOS?
      </Heading>
      <Text
        fontWeight={"bold 400"}
        w={{ base: "100%", md: "70%" }}
        fontSize={{ base: "0.75em", md: "0.899em" }}
        color={"#525252"}
      >
        If you're ready to take the next step in your career, join us at HOS and
        be part of a team that's shapes the future. When you join us, you're not
        just taking a job; you're becoming a part of a dynamic company that's
        committed to growth. HOS team creates solutions that impact industries
        and drive change. With opportunities for continuous learning, exciting
        projects that challenge the norm, and a culture that values both your
        professional and personal well-being.
      </Text>
    </Box>
  );
}

export default WhyEmploySec;
