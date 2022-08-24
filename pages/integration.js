import React, { useState } from "react";
import { useRouter } from "next/router";
import NextJSLogo from "/src/images/next-js-logo.svg";
import ExpressJSLogo from "/src/images/express-js-logo.svg";
import ReactNativeLogo from "/src/images/react-native-icon.svg";
import ReduxLogo from "/src/images/redux-icon.svg";
import FirebaseLogo from "/src/images/firebase-logo-built_white.svg";
import Image from "next/image";
import { Box, Typography, useMediaQuery, Button, styled } from "@mui/material";
import { createBreakpoints } from "@mui/system";
import styles from "/styles/Home.module.css";
import Footer from "/src/components/Footer.js";
import LogoHeader from "/src/components/LogoHeader.js";

function Integration() {
  const breakpoints = createBreakpoints({});
  const matches = useMediaQuery(breakpoints.down("lg"));

  const containerStyle = {
    display: "flex",
    height: !matches && "75vh",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: matches && "column",
  };

  const subContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: matches ? "100%" : "50%",
    height: "100%",
  };

  const AMButton = styled(Button)(({ theme }) => ({
    width: matches ? "70%" : "50%",
    backgroundColor: "white",
    borderRadius: "0px",
    height: "90px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "white",
      width: matches ? "80%" : "60%",
      height: "100px",
      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
    },
  }));

  const FeaturesContainer = () => (
    <Box sx={[subContainerStyle, { justifyContent: "center" }]}>
      <AMButton
        onClick={() => window.open("https://firebase.google.com/")}
        sx={{
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "25px",
        }}
      >
        <Image layout="fill" src={FirebaseLogo} alt="firebase-logo" />
      </AMButton>
      <AMButton onClick={() => window.open("https://redux.js.org/")}>
        <Image
          layout="fixed"
          width="70px"
          height="70px"
          src={ReduxLogo}
          alt="redux-logo"
        />
      </AMButton>
      <AMButton onClick={() => window.open("https://reactnative.dev/")}>
        <Image
          layout="fixed"
          width="70px"
          src={ReactNativeLogo}
          alt="react-native-logo"
        />
      </AMButton>
      <AMButton onClick={() => window.open("https://nextjs.org/")}>
        <Image
          layout="fixed"
          width="150px"
          src={NextJSLogo}
          alt="next-js-logo"
        />
      </AMButton>
      <AMButton
        onClick={() => window.open("https://expressjs.com/")}
        sx={{
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "25px",
        }}
      >
        <Image
          layout="fixed"
          width="150px"
          src={ExpressJSLogo}
          alt="express-js-logo"
        />
      </AMButton>
    </Box>
  );

  const DetailsContainer = () => (
    <Box
      sx={[
        subContainerStyle,
        {
          justifyContent: "space-evenly",
          padding: 3,
          marginTop: matches && 3,
          marginBottom: matches && 3,
        },
      ]}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Some of our integration we include in our mobile and web application
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        We are always working to bring new features in our apps and being always
        up to date with the latest updates
      </Typography>
    </Box>
  );

  return (
    <div className={styles.commonBackground}>
      <LogoHeader />
      <Box sx={containerStyle}>
        <FeaturesContainer />
        <DetailsContainer />
      </Box>
      <Footer />
    </div>
  );
}

export default Integration;
