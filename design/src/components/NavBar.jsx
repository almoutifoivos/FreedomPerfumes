import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import NavButton from "../assets/basic/NavButton";
import logo from "../assets/logo.png";

export default function NavBar({ exploreRef, displayRef }) {
  const handleExploreClick = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDisplayClick = () => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container
      sx={{
        marginTop: "0",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          marginBottom: 2,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100%", 
            height: "auto", 
            maxWidth: "200px", 
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          width: "100%",
        }}
      >
        <NavButton> FREEDOM UNIVERSE </NavButton>
        <NavButton onClick={handleExploreClick}> EXPLORE </NavButton>
        <NavButton onClick={handleDisplayClick}> COLLECTION </NavButton>
      </Box>
    </Container>
  );
}
