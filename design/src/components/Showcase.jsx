import React from "react";
import Carousel from "react-material-ui-carousel";
import { items, Item } from "./CarouselItems";
import { Box } from "@mui/material";

function Showcase() {
  return (
    <Box sx={{ width: "100vw" }}>
      <Carousel indicators={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default Showcase;
