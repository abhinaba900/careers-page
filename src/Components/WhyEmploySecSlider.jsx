import React from "react";
import { Box, Tag, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function WhyEmploySecSlider() {
  return (
    <Box w={{ base: "100%", md: "100%" }} m="auto" h={{ base: "70vh", md: "60vh" }}>
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
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
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
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
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
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
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
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Box
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            p={"1em"}
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
