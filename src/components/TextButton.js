import React from "react";
import { styled, Button } from "@mui/material";

const ButtonStyle = styled(Button)(({ theme }) => ({
  textAlign: "center",
  textTransform: "none",
  color: "black",
  fontSize: 20,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#3076FF",
  },
}));

function TextButton({ children, onClick, style }) {
  return (
    <ButtonStyle variant="text" disableRipple onClick={onClick} sx={style}>
      {children}
    </ButtonStyle>
  );
}

export default TextButton;
