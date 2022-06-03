import React from "react";
import { Grid, Box, styled, Typography, Button } from "@mui/material";
import TextButton from "./TextButton";

const addBtnStyle = {
  fontSize: 14,
  height: 25,
};

const RGrid = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    height: "300px",
  },
  border: "1px solid",
  borderColor: "#CACACA",
  display: "flex",
  justifyContent: "center",
  paddingBottom: 5,
  paddingTop: 30,
  height: "100px",
}));

function Footer() {
  return (
    <RGrid container spacing={1}>
      <Grid item sx={{ paddingBottom: 5 }} md={2}>
        <Typography>AmplioNow</Typography>
      </Grid>
      <Grid item>
        <TextButton style={addBtnStyle}>Consultation</TextButton>
      </Grid>
      <Grid item>
        <TextButton style={addBtnStyle}>About</TextButton>
      </Grid>
      <Grid item>
        <TextButton style={addBtnStyle}>Contact Us</TextButton>
      </Grid>
      <Grid item>
        <TextButton style={addBtnStyle}>Cookie Policy</TextButton>
      </Grid>
      <Grid item>
        <TextButton style={addBtnStyle}>Terms of Use</TextButton>
      </Grid>
    </RGrid>
  );
}

export default Footer;
