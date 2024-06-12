import React from "react";
import { Paper } from "@mui/material";
import flowerImage from "../assets/images/flower.jpg";
import bottles from "../assets/images/bottles.jpg";

const items = [
  {
    image: flowerImage,
  },
  {
    image: bottles,
  },
];

function Item(props) {
  return (
    <Paper
      sx={{
        height: "100%", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={props.item.image}
        alt="perfume"
        style={{
          width: "100%", 
          height: "100vh", 
          objectFit: "cover", 
        }}
      />
    </Paper>
  );
}

export { items, Item };
