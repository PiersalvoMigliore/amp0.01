import * as React from "react";
import { Grid, Box, styled, Typography, Button } from "@mui/material";

const HeaderButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  textTransform: "none",
  color: "black",
  fontSize: 15,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#3076FF",
  },
}));

const styleHeaderBtn = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

const TouchableButton = ({ title }) => (
  <HeaderButton disableRipple variant="text">
    {title}
  </HeaderButton>
);

function Header() {
  return (
    <Box
      sx={{
        height: 80,
        alignItems: "center",
        display: "flex",
        width: "100%",
        overflow: "visible",
      }}
    >
      <Grid container>
        <Grid item xs={3} md={3} sx={styleHeaderBtn}>
          <Typography>AmplioNow</Typography>
        </Grid>
        <Grid item xs={6} md={7} sx={styleHeaderBtn}>
          <Grid item xs={2} md={1} sx={styleHeaderBtn}>
            <TouchableButton title="Templates" />
          </Grid>
          <Grid item xs={2} md={2} sx={styleHeaderBtn}>
            <TouchableButton title="Integration" />
          </Grid>
          <Grid item xs={2} md={0.75} sx={styleHeaderBtn}>
            <TouchableButton title="Pricing" />
          </Grid>
          <Grid item xs={2} md={2} sx={styleHeaderBtn}>
            <TouchableButton title="What We Do" />
          </Grid>
          <Grid item xs={2} md={1} sx={styleHeaderBtn}>
            <TouchableButton title="Features" />
          </Grid>
          <Grid item xs={2} md={1.25} sx={styleHeaderBtn}>
            <TouchableButton title="Ask Us" />
          </Grid>
          <Grid item xs={2} md={1} sx={styleHeaderBtn}>
            <TouchableButton title="About" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
