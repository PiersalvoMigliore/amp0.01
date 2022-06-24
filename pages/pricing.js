import React from "react";
import Image from "next/image";
import WebAndMobile from "/src/images/workspace_SVG.svg";
import Mobile from "/src/images/Chat_SVG.svg";
import Web from "/src/images/app_development_SVG.svg";
import { Box, Typography, useMediaQuery, Button, styled } from "@mui/material";
import { createBreakpoints } from "@mui/system";
import styles from "/styles/Home.module.css";
import Footer from "/src/components/Footer.js";
import LogoHeader from "/src/components/LogoHeader.js";

function Pricing() {
  const breakpoints = createBreakpoints({});
  const matches = useMediaQuery(breakpoints.down("lg"));

  const containerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  };

  const subContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: matches && "column",
  };

  const insideStyle = {
    width: matches ? "100%" : "50%",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const commonPadding = {
    padding: 1,
  };

  const AMBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: matches ? "100px" : "200px",
    backgroundColor: "white",
    height: matches ? "300px" : "400px",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      width: matches ? "150px" : "250px",
      height: matches ? "350px" : "450px",
    },
  }));

  const AMImage = ({ src }) => (
    <Image layout="fixed" width="350px" src={src} alt="image" />
  );

  const WebAndMobileContainer = () => (
    <Box sx={insideStyle}>
      <AMBox
        sx={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Standard
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $4,000
        </Typography>
      </AMBox>
      <AMBox>
        <Typography sx={commonPadding} variant="h6">
          Premium
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Server
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Payment
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $6,000
        </Typography>
      </AMBox>
      <AMBox
        sx={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Basic
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $3,000
        </Typography>
      </AMBox>
    </Box>
  );

  const MobileContainer = () => (
    <Box sx={insideStyle}>
      <AMBox
        sx={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Standard
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $2,000
        </Typography>
      </AMBox>
      <AMBox>
        <Typography sx={commonPadding} variant="h6">
          Premium
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Server
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Payment
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $3,000
        </Typography>
      </AMBox>
      <AMBox
        sx={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Basic
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $1,000
        </Typography>
      </AMBox>
    </Box>
  );

  const WebContainer = () => (
    <Box sx={insideStyle}>
      <AMBox
        sx={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Standard
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $2,000
        </Typography>
      </AMBox>
      <AMBox>
        <Typography sx={commonPadding} variant="h6">
          Premium
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Storage
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Server
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Payment
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $3,000
        </Typography>
      </AMBox>
      <AMBox
        sx={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px" }}
      >
        <Typography sx={commonPadding} variant="h6">
          Basic
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Authentication
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          Database
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h7">
          -
        </Typography>
        <Typography sx={commonPadding} variant="h6">
          $1,000
        </Typography>
      </AMBox>
    </Box>
  );

  return (
    <div className={styles.commonBackground}>
      <LogoHeader />
      <Box sx={containerStyle}>
        <Box sx={subContainerStyle}>
          <Box sx={[insideStyle, { flexDirection: "column" }]}>
            <Typography variant="h3">Web and Mobile Package</Typography>
            <AMImage src={WebAndMobile} />
          </Box>
          <WebAndMobileContainer />
        </Box>
        <Box
          sx={[
            subContainerStyle,
            { borderBottom: 1, borderTop: 1, borderColor: "#CACACA" },
          ]}
        >
          {!matches && <MobileContainer />}
          <Box sx={[insideStyle, { flexDirection: "column" }]}>
            <Typography variant="h3">Mobile Package</Typography>
            <AMImage src={Mobile} />
          </Box>
          {matches && <MobileContainer />}
        </Box>
        <Box sx={subContainerStyle}>
          <Box sx={[insideStyle, { flexDirection: "column" }]}>
            <Typography variant="h3">Web Package</Typography>
            <AMImage src={Web} />
          </Box>
          <WebContainer />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Pricing;
