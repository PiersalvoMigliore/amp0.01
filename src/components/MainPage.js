import React from "react";
import { Grid, Box, styled, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeaderButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  textTransform: "none",
  color: "black",
  fontSize: 20,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#3076FF",
  },
}));

const ButtonAM = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  border: "1px solid",
  borderColor: "#CACACA",
  backgroundColor: "transparent",
  width: "25%",
  height: "200px",
  boxShadow: "none",
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "white",
    boxShadow: 4,
  },
}));

const ButtonPM = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  backgroundColor: "white",
  width: "65%",
  height: "200px",
  boxShadow: "none",
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "white",
    boxShadow: 4,
  },
}));

function MainPage() {
  return (
    <Box>
      <Box sx={{ padding: 20 }}>
        <Typography variant="h1" sx={{ padding: 1 }}>
          Upgrade Now
        </Typography>
        <Typography variant="h2" sx={{ padding: 1 }}>
          Take the next step and bring your business into the world of mobile
          application
        </Typography>
        <HeaderButton
          sx={{ display: "flex", alignItems: "center", padding: 1 }}
          disableRipple
          variant="text"
        >
          <Typography sx={{ fontSize: 17 }}>
            Get started now with a quote
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </HeaderButton>
      </Box>
      <Box
        sx={{
          paddingBottom: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonAM variant="contained">Ciao</ButtonAM>
        <ButtonAM variant="contained">Come</ButtonAM>
        <ButtonAM variant="contained">Stay</ButtonAM>
      </Box>
      <Box
        sx={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ width: "50%", textAlign: "center" }}>
          Studies show that Mobile Applications reach 4.2x more than regular
          website. Increasing the visibility of your brand and maximizing
          profits.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "800px",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonPM variant="contained">Ciao</ButtonPM>
        <ButtonPM variant="contained">Come</ButtonPM>
        <ButtonPM variant="contained">Stay</ButtonPM>
      </Box>
    </Box>
  );
}

export default MainPage;
