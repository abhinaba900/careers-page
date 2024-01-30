import React from "react";
import { Box, Tag, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function WhyEmploySecSlider() {
  return (
    <Box
      w={{ base: "100%", md: "100%" }}
      m="auto"
      h={{ base: "70vh", md: "52vh" }}
    >
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper leftAlignedPagination"
      >
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
            w={"100%"}
            h={"90%"}
          >
            <Tag
              backgroundColor={"#EC1C24"}
              color={"white"}
              fontWeight={"bold"}
              w={"fit-content"}
            >
              Journey with HOS
            </Tag>
            <Text fontWeight={"400"} fontSize={"0.899em"} color={"#525252"}>
              During my journey at HOS, ascending from Warehouse Supervisor to
              Operations Manager, I've engaged in diverse projects that honed my
              skills and aligned with company goals. Collaborating with skilled
              colleagues and mentors, I expanded my expertise. HOS's commitment
              to innovation and growth through technology not only inspired me
              but also led me to continuous learning amidst dynamic challenges
            </Text>
            <Text fontWeight={"bold"} fontSize={"0.999em"}>
              DP - Chicago, USA
            </Text>
            <Text fontSize={"0.799em"}>
              Operations Manager – Operation Department
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100%", height: "100%", aspectRatio: "2/2" }}
        >
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
            w={"100%"}
            h={"90%"}
          >
            <Tag
              backgroundColor={"#C9A453"}
              color={"white"}
              fontWeight={"bold"}
              w={"fit-content"}
            >
              Journey with HOS
            </Tag>
            <Text fontWeight={"400"} fontSize={"0.899em"} color={"#525252"}>
              Initially disregarding a social media ad due to unfamiliarity with
              the company, my wife requested me to apply as she knew the brand
              well. After a successful interview, I embarked on a journey of
              highs and hurdles. New, enduring friendships were created. As a
              newcomer to the corporate world, adjusting posed challenges, but
              with senior guidance, I swiftly acclimated.
            </Text>
            <Text fontWeight={"bold"} fontSize={"0.999em"}>
              DD - Mumbai, India
            </Text>
            <Text fontSize={"0.799em"}>
              FSQA Specialist - Quality Assurance Department
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100%", height: "100%", aspectRatio: "3/2" }}
        >
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
            w={"100%"}
            h={"90%"}
          >
            <Tag
              backgroundColor={"#EC1C24"}
              color={"white"}
              fontWeight={"bold"}
              w={"fit-content"}
            >
              Average day at HOS
            </Tag>
            <Text fontWeight={"400"} fontSize={"0.899em"} color={"#525252"}>
              During my journey at HOS, ascending from Warehouse Supervisor to
              Operations Manager, I've engaged in diverse projects that honed my
              skills and aligned with company goals. Collaborating with skilled
              colleagues and mentors, I expanded my expertise. HOS's commitment
              to innovation and growth through technology not only inspired me
              but also led me to continuous learning amidst dynamic challenges
            </Text>
            <Text fontWeight={"bold"} fontSize={"0.999em"}>
              SP - Mumbai, India
            </Text>
            <Text fontSize={"0.799em"}>
              VP Marketing – Marketing Department
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100%", height: "100%", aspectRatio: "3/2" }}
        >
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
            w={"100%"}
            h={"90%"}
          >
            <Tag
              backgroundColor={"#EC1C24"}
              color={"white"}
              fontWeight={"bold"}
              w={"fit-content"}
            >
              Journey with HOS
            </Tag>
            <Text fontWeight={"400"} fontSize={"0.899em"} color={"#525252"}>
              During my journey at HOS, ascending from Warehouse Supervisor to
              Operations Manager, I've engaged in diverse projects that honed my
              skills and aligned with company goals. Collaborating with skilled
              colleagues and mentors, I expanded my expertise. HOS's commitment
              to innovation and growth through technology not only inspired me
              but also led me to continuous learning amidst dynamic challenges
            </Text>
            <Text fontWeight={"bold"} fontSize={"0.999em"}>
              DP - Chicago, USA
            </Text>
            <Text fontSize={"0.799em"}>
              Operations Manager – Operation Department
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100%", height: "100%", aspectRatio: "3/2" }}
        >
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
            w={"100%"}
            h={"90%"}
          >
            <Tag
              backgroundColor={"#C9A453"}
              color={"white"}
              fontWeight={"bold"}
              w={"fit-content"}
            >
              Journey with HOS
            </Tag>
            <Text fontWeight={"400"} fontSize={"0.899em"} color={"#525252"}>
              During my journey at HOS, ascending from Warehouse Supervisor to
              Operations Manager, I've engaged in diverse projects that honed my
              skills and aligned with company goals. Collaborating with skilled
              colleagues and mentors, I expanded my expertise. HOS's commitment
              to innovation and growth through technology not only inspired me
              but also led me to continuous learning amidst dynamic challenges
            </Text>
            <Text fontWeight={"bold"} fontSize={"0.999em"}>
              DP - Chicago, USA
            </Text>
            <Text fontSize={"0.799em"}>
              Operations Manager – Operation Department
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default WhyEmploySecSlider;
