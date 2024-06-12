import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CssBaseline, Divider, Container, Box } from "@mui/material";
import Carousel from "./components/Showcase";
import Explore from "./components/Explore";
import Display from "./components/Display";

export default function App() {
  const exploreRef = useRef(null);
  const displayRef = useRef(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <NavBar exploreRef={exploreRef} displayRef={displayRef} />
      <Carousel />
      <Explore exploreRef={exploreRef} />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Divider sx={{ width: "70%" }} />
      </Container>
      <Display displayRef={displayRef} />
      <Footer />
    </Box>
  );
}
