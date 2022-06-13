import React from "react";
import { useRouter } from "next/router";
import { Grid, Box, styled, Typography, Button } from "@mui/material";
import Image from "next/image";
import MyImage from "./MyImage.js";
import ButtonAM from "./ButtonAM.js";
import Elements03 from "../images/Elements03.svg";
import Email from "../images/Email.png";
import Creative_process from "../images/Creative_process.png";
import Online_shopping from "../images/Online_shopping.png";
import Financial_insurance from "../images/Financial_insurance.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextButton from "./TextButton";
import styles from "../../styles/Home.module.css";

const RBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    height: "450px",
    marginLeft: 0,
    width: "100%",
  },
  width: "92%",
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

const imageStyle = {
  height: "80%",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

const EXButton = ({ title, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={
        type === "integration"
          ? styles.INTButton
          : type === "features"
          ? styles.FTButton
          : styles.STButton
      }
    >
      <Typography sx={{ fontSize: 50, color: "white" }} variant="h4">
        {title}
      </Typography>
      <ArrowForwardIcon sx={{ fontSize: 60, color: "white" }} />
    </button>
  );
};

function MainPage() {
  const router = useRouter();

  return (
    <Box>
      <RBox>
        <Typography variant="h1" sx={{ paddingBottom: 1 }}>
          Upgrade Now
        </Typography>
        <Typography variant="h2" sx={{ paddingTop: 1 }}>
          Take the next step and bring your business into the world of mobile
          applications
        </Typography>
        <TextButton style={{ fontSize: 19 }}>
          Get started now with a quote
          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
        </TextButton>
      </RBox>
      <RBox
        sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "200px",
        }}
        container
      >
        <Grid sx={{ padding: 3 }} item xs={12} md={4} lg={1.9}>
          <ButtonAM
            onClick={() => router.push("/Templates")}
          >
            <Typography variant="h5">Templates</Typography>
            <Box sx={imageStyle}>
              <MyImage src={Online_shopping} />
              <ArrowForwardIosIcon />
            </Box>
          </ButtonAM>
        </Grid>
        <Grid
          item
          md={1}
          sx={{
            height: "200px",
            width: "160px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MyImage height="160px" width="160px" src={Creative_process} />
        </Grid>
        <Grid sx={{ padding: 3 }} item xs={12} md={3.5} lg={3.2}>
          <ButtonAM>
            <Typography variant="h5">Pricing</Typography>
            <Box sx={imageStyle}>
              <MyImage src={Financial_insurance} />
              <ArrowForwardIosIcon />
            </Box>
          </ButtonAM>
        </Grid>
      </RBox>
      <Box
        sx={{
          height: "100%",
          paddingTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Typography variant="h3" sx={{ width: "50%", textAlign: "center" }}>
          Studies show that Mobile Applications reach 4.2x more users than
          regular website. Increasing the visibility of your brand and
          maximizing profits.
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
        <EXButton type="integration" title="Integration" />
        <EXButton type="steps" title="Steps" />
        <EXButton type="features" title="Features" />
      </Box>
    </Box>
  );
}

export default MainPage;
