import { Box, Toolbar, Typography, colors } from "@mui/material";
import React from "react";
import logo from "../assets/logoBlack.png";
import Divider from '@mui/material/Divider';
import NavButton from "../assets/basic/NavButton";



export default function Footer() {
  return (
    <Box sx={{background:"black"}}>
      <Toolbar
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" sx={{ height: 100 }} alt="Logo" src={logo} />
        <Divider sx={{color:"white"}}/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Typography sx={{color:"white"}}> FREEDOM.COM - Freedom Group, Athens - Contact: almoutifoivos@gmail.com </Typography>
        </Box>
      </Toolbar>
    </Box>
  );
}
