import React from 'react';
import { Button } from '@mui/material';

const NavButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        position: 'relative',
        width: '300px', 
        backgroundColor: "transparent",
        color: "black",
        fontWeight:"bold",
        boxShadow: "none",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "33%",
          height: "2px",
          backgroundColor: "black",
          transform: "translateX(-50%)",
          transition: "width 0.3s",
          opacity: 0,
        },
        "&:hover::after": {
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
