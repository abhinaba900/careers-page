import React, { useState, useRef, useEffect } from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import Aimage from "../images/Group 4880@2x.png";
import Bimage from "../images/Group 4881@2x.png";
import Cimage from "../images/Group 4882@2x.png";
import Dimage from "../images/Group 4883@2x.png";
import Eimage from "../images/Group 4878@2x.png";
function CompanyValues() {
  // This state will control the flip state of each card
const [isFlipped, setIsFlipped] = useState(Array(5).fill(false));
const flipTimeoutsRef = useRef([]);

useEffect(() => {
  // Clear timeouts when the component unmounts
  return () => {
    flipTimeoutsRef.current.forEach(clearTimeout);
  };
}, []);

const handleClick = (index) => {
  setIsFlipped((prevFlipped) =>
    prevFlipped.map((flip, i) => (i === index ? !flip : flip))
  );
};

const handleMouseEnter = (index) => {
  clearTimeout(flipTimeoutsRef.current[index]);
  flipTimeoutsRef.current[index] = setTimeout(() => {
    setIsFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  }, 500);
};

const handleMouseLeave = (index) => {
  clearTimeout(flipTimeoutsRef.current[index]);
  flipTimeoutsRef.current[index] = setTimeout(() => {
    setIsFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  }, 500);
};

  return (
    <Box>
      <Box>
        <Heading
          textAlign="center"
          mt="10vh"
          fontSize={{ base: "1.7em", md: "1.8em", lg: "2em", xl: "2.5em" }}
          fontFamily="poppins"
          fontWeight="Bold"
          color="#EC1C24"
          mb={"2em"}
        >
          COMPANY VALUES
        </Heading>
      </Box>
      <Box
        w={"100%"}
        h={"50vh"}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gridAutoFlow={{ md: "row dense" }} // This ensures the grid items are filled sequentially
        gap={"1em"}
        _after={{
          content: `""`,
          display: { md: "block", lg: "none" }, // Only display pseudo-element on 'md'
          gridColumn: "1 / -1", // Span full width
        }}
      >
        {/* Example for one card, replicate as needed */}
        <Box w={"100%"} height={"100%"} cursor={"pointer"}>
          <ReactCardFlip
            isFlipped={isFlipped[0]}
            flipDirection="horizontal"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Front of the Card */}
            <Box
              // onClick={() => handleClick(0)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              backgroundImage={
                "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQr-FtYL6QU8ajatAhF_Ob91xWi26QQ7ST1dwdmFJnwvrqID5Bb)"
              }
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              h="20em"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Text
                fontSize={"11.25em"}
                color={"#ffff"}
                fontWeight="bold"
                fontFamily={"poppins"}
              >
                A
              </Text>
            </Box>

            {/* Back of the Card */}
            <Box
              onClick={() => handleClick(0)}
              h="20em"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              p={"2em"}
              gap={"0.5em"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Image w={"4.375em"} h={"4.313em"} src={Aimage} alt="a image" />
              <Heading
                _before={{
                  content: '"A"',
                  color: "#ED1C24",
                  fontWeight: "bold",
                  display: "inline",
                  fontSize: "1.5em",
                }}
                fontSize={"1.375em"}
                color={"#525252"}
              >
                MBITION
              </Heading>
              <Text fontSize={"0.875em"} opacity={0.7}>
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business
              </Text>
            </Box>
          </ReactCardFlip>
        </Box>
        <Box cursor={"pointer"}>
          <ReactCardFlip isFlipped={isFlipped[1]} flipDirection="horizontal">
            {/* Front of the Card */}
            <Box
              onClick={() => handleClick(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              backgroundImage={
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsU3B8fl6BdPDQtHbLIP_mKlnh1AiyU4z7GaWknZgJcxi0t1I)"
              }
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              h="20em"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Text
                fontSize={{ base: "5em", md: "7em", lg: "7em", xl: "11.25em" }}
                color={"#ffff"}
                fontWeight="bold"
                fontFamily={"poppins"}
              >
                C
              </Text>
            </Box>

            {/* Back of the Card */}
            <Box
              onClick={() => handleClick(1)}
              h="20em"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              p={"2em"}
              gap={"0.5em"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Image w={"4.375em"} h={"4.313em"} src={Bimage} alt="a image" />
              <Heading
                _before={{
                  content: '"A"',
                  color: "#ED1C24",
                  fontWeight: "bold",
                  display: "inline",
                  fontSize: "1.5em",
                }}
                fontSize={"1.375em"}
                color={"#525252"}
              >
                MBITION
              </Heading>
              <Text fontSize={"0.875em"} opacity={0.7}>
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business
              </Text>
            </Box>
          </ReactCardFlip>
        </Box>
        <Box cursor={"pointer"}>
          <ReactCardFlip isFlipped={isFlipped[2]} flipDirection="horizontal">
            {/* Front of the Card */}
            <Box
              onClick={() => handleClick(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
              backgroundImage={
                "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBFm6qNilqF9KJiCvL4NefRXZUXaSOqOYJFBY6lTB2SEKTcqPB)"
              }
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              h="20em"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Text
                fontSize={"11.25em"}
                color={"#ffff"}
                fontWeight="bold"
                fontFamily={"poppins"}
              >
                A
              </Text>
            </Box>

            {/* Back of the Card */}
            <Box
              onClick={() => handleClick(2)}
              h="20em"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              p={"2em"}
              gap={"0.5em"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Image w={"4.375em"} h={"4.313em"} src={Cimage} alt="a image" />
              <Heading
                _before={{
                  content: '"A"',
                  color: "#ED1C24",
                  fontWeight: "bold",
                  display: "inline",
                  fontSize: "1.5em",
                }}
                fontSize={"1.375em"}
                color={"#525252"}
              >
                MBITION
              </Heading>
              <Text fontSize={"0.875em"} opacity={0.7}>
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business
              </Text>
            </Box>
          </ReactCardFlip>
        </Box>
        <Box cursor={"pointer"}>
          <ReactCardFlip isFlipped={isFlipped[3]} flipDirection="horizontal">
            {/* Front of the Card */}
            <Box
              onClick={() => handleClick(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
              backgroundImage={
                "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQen_i5fqzQOpZAUYNumSb1EmExGlhib5OFwpnPV_fAghA_D8in)"
              }
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              h="20em"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Text
                fontSize={"11.25em"}
                color={"#ffff"}
                fontWeight="bold"
                fontFamily={"poppins"}
              >
                R
              </Text>
            </Box>

            {/* Back of the Card */}
            <Box
              onClick={() => handleClick(3)}
              h="20em"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              p={"2em"}
              gap={"0.5em"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Image w={"4.375em"} h={"4.313em"} src={Dimage} alt="a image" />
              <Heading
                _before={{
                  content: '"A"',
                  color: "#ED1C24",
                  fontWeight: "bold",
                  display: "inline",
                  fontSize: "1.5em",
                }}
                fontSize={"1.375em"}
                color={"#525252"}
              >
                MBITION
              </Heading>
              <Text fontSize={"0.875em"} opacity={0.7}>
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business
              </Text>
            </Box>
          </ReactCardFlip>
        </Box>
        <Box cursor={"pointer"}>
          <ReactCardFlip isFlipped={isFlipped[4]} flipDirection="horizontal">
            {/* Front of the Card */}
            <Box
              onClick={() => handleClick(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
              backgroundImage={
                "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQen_i5fqzQOpZAUYNumSb1EmExGlhib5OFwpnPV_fAghA_D8in)"
              }
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              h="20em"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Text
                fontSize={"11.25em"}
                color={"#ffff"}
                fontWeight="bold"
                fontFamily={"poppins"}
              >
                E
              </Text>
            </Box>

            {/* Back of the Card */}
            <Box
              onClick={() => handleClick(4)}
              h="20em"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              p={"2em"}
              gap={"0.5em"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              borderRadius={"2em"}
            >
              <Image w={"4.375em"} h={"4.313em"} src={Eimage} alt="a image" />
              <Heading
                _before={{
                  content: '"A"',
                  color: "#ED1C24",
                  fontWeight: "bold",
                  display: "inline",
                  fontSize: "1.5em",
                }}
                fontSize={"1.375em"}
                color={"#525252"}
              >
                MBITION
              </Heading>
              <Text fontSize={"0.875em"} opacity={0.7}>
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business
              </Text>
            </Box>
          </ReactCardFlip>
        </Box>
        {/* Add more boxes for other values */}
      </Box>
    </Box>
  );
}

export default CompanyValues;
