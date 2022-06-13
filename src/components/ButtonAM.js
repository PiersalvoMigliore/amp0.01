import React from "react";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  border: "1px solid",
  borderColor: "#CACACA",
  backgroundColor: "transparent",
  color: "black",
  textTransform: "none",
  width: "350px",
  height: "200px",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "white",
    boxShadow: "10px 32px 25px 2px rgba(20, 19, 19, 0.2)",
    color: "#3076FF",
  },
}));

export default function ButtonAM({ children, onClick, style }) {
  return (
    <StyledButton
      sx={{ ...style }}
      variant="contained"
      onClick={onClick}
      disableRipple
    >
      {children}
    </StyledButton>
  );
}
