import { Box, Typography, Container } from "@mui/material";
import React, { useRef } from "react";


export default function Explore(  {exploreRef} ) {


  return (
    <Container
    ref={exploreRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "40px" }, 
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>DEIFIED FEAT.</Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", paddingBottom: { xs: "20px", md: "50px" } }} 
      >
        TONY IOMMI
      </Typography>
      <Typography sx={{ paddingBottom: { xs: "10px", md: "20px" } }}> 
        Get ready to enter the second chapter of the unexpected venture to
        surprise the senses with the new scent,
      </Typography>
      <Typography>
        <Box component="span" fontWeight="bold">
          Tony Iommi Deified
        </Box>{" "}
        for{" "}
        <Box component="span" fontWeight="bold">
          Freedom Blends
        </Box>
      </Typography>
    </Container>
  );
}
