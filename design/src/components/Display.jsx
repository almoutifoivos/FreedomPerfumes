import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { items, responsive } from "./DisplayCarousel";
import { Box, Container, Typography } from "@mui/material";

function Display( { displayRef }) {
  return (
    <Container ref={displayRef}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={responsive.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, index) => (
          <Container key={index} sx={{ padding: "40px", textAlign: "center", pointerEvents:"none", userSelect:"none" }}>
            <Container
              sx={{
                backgroundColor: "#e6e6e6",
                display: "inline-block",
                padding: "20px",
              }}
            >
              <img
                src={item.img}
                alt="perfumeBottle"
                style={{ width: "100%", height: "500px", objectFit: "cover", userSelect: "none"  }}
              />
            </Container>
            <Container sx={{ marginTop: "20px" }}>
              <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
              <Typography>{item.description}</Typography>
            </Container>
          </Container>
        ))}
      </Carousel>
    </Container>
  );
}

export default Display;
