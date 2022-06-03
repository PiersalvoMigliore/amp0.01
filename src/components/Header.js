import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
} from "@mui/material";
import TextButton from "./TextButton";
import { createBreakpoints } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const breakpoints = createBreakpoints({});

const styleHeaderBtn = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

const drawerBtn = {
  borderBottom: "1px solid",
  borderColor: "#CACACA",
  backgroundColor: "#ededf2",
};

function Header() {
  const matches = useMediaQuery(breakpoints.down("md"));

  const [drawer, setDrawer] = useState(false);

  if (matches) {
    return (
      <Box>
        <Box
          sx={{
            height: 80,
            alignItems: "center",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Grid item xs={3} md={3} sx={styleHeaderBtn}>
            <Typography>AmplioNow</Typography>
          </Grid>
          <Grid item sx={styleHeaderBtn}>
            <TextButton
              onClick={() => setDrawer(!drawer)}
              style={{ fontSize: 15 }}
            >
              <MenuIcon />
            </TextButton>
          </Grid>
        </Box>
        <SwipeableDrawer
          anchor="top"
          open={drawer}
          onClose={() => setDrawer(!drawer)}
          onOpen={() => setDrawer(!drawer)}
        >
          <TextButton style={drawerBtn}>Templates</TextButton>
          <TextButton style={drawerBtn}>Integration</TextButton>
          <TextButton style={drawerBtn}>Pricing</TextButton>
          <TextButton style={drawerBtn}>What We Do</TextButton>
          <TextButton style={drawerBtn}>Features</TextButton>
          <TextButton style={drawerBtn}>Ask Us</TextButton>
          <TextButton style={drawerBtn}>About</TextButton>
        </SwipeableDrawer>
      </Box>
    );
  } else {
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
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>Templates</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>Integration</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>Pricing</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>What We Do</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>Features</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>Ask Us</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>About</TextButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Header;
