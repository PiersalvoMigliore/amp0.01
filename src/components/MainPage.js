import React from "react";
import { Grid, Box, styled, Typography, Button } from "@mui/material";
import Image from "next/image";
import Elements03 from "../images/Elements03.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextButton from "./TextButton";

const RBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    height: "400px",
    marginLeft: 0,
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  marginLeft: 80,
}));

const RGrid = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
}));

const ButtonAM = styled(Button)(({ theme }) => ({
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
    boxShadow: 4,
    color: "#3076FF",
  },
}));

const ButtonPM = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  backgroundColor: "white",
  width: "65%",
  height: "200px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  color: "black",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "white",
    boxShadow: 4,
    color: "#3076FF",
  },
}));

const imageStyle = {
  height: "80%",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

const MyImage = ({ src }) => {
  return (
    <Image src={src} alt="Picture of the author" width="90%" height="90%" />
  );
};

function MainPage() {
  return (
    <Box>
      <RBox>
        <Typography variant="h1" sx={{ paddingBottom: 1 }}>
          Upgrade Now
        </Typography>
        <Typography variant="h2" sx={{ paddingTop: 1 }}>
          Take the next step and bring your business into the world of mobile
          application
        </Typography>
        <TextButton style={{ fontSize: 19 }}>
          Get started now with a quote
          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
        </TextButton>
      </RBox>
      <RGrid container spacing={1}>
        <Grid item xs={12} md={3}>
          <ButtonAM variant="contained">
            <Typography variant="h5">Templates</Typography>
            <Box sx={imageStyle}>
              <MyImage src={Elements03} />
              <ArrowForwardIosIcon />
            </Box>
          </ButtonAM>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <MyImage src={Elements03} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ButtonAM variant="contained">
            <Typography variant="h5">Pricing</Typography>
            <Box sx={imageStyle}>
              <MyImage src={Elements03} />
              <ArrowForwardIosIcon />
            </Box>
          </ButtonAM>
        </Grid>
      </RGrid>
      <Box
        sx={{
          height: "100%",
          paddingTop: 3,
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
        <ButtonPM variant="contained">
          <Typography variant="h4">Integration</Typography>
          <Box sx={[imageStyle, { height: "90%" }]}>
            <MyImage src={Elements03} />
            <ArrowForwardIcon sx={{ fontSize: 50 }} />
          </Box>
        </ButtonPM>
        <ButtonPM variant="contained">
          <Typography variant="h4">Steps</Typography>
          <Box sx={[imageStyle, { height: "90%" }]}>
            <MyImage src={Elements03} />
            <ArrowForwardIcon sx={{ fontSize: 50 }} />
          </Box>
        </ButtonPM>
        <ButtonPM variant="contained">
          <Typography variant="h4">Features</Typography>
          <Box sx={[imageStyle, { height: "90%" }]}>
            <MyImage src={Elements03} />
            <ArrowForwardIcon sx={{ fontSize: 50 }} />
          </Box>
        </ButtonPM>
      </Box>
    </Box>
  );
}

export default MainPage;
