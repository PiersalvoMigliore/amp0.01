import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
} from "@mui/material";
import TextButton from "./TextButton";
import { createBreakpoints } from "@mui/system";
import LogoAmplioNow from "../images/LogoAmplioNow.png";
import MenuIcon from "@mui/icons-material/Menu";

const breakpoints = createBreakpoints({});

const styleHeaderBtn = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  paddingLeft: 1,
  paddingRight: 1,
};

const drawerBtn = {
  borderBottom: "1px solid",
  borderColor: "#CACACA",
  backgroundColor: "#ededf2",
};

function Header() {
  const router = useRouter();

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
            backgroundColor: "#ececf2",
          }}
        >
          <Grid item xs={3} md={3} sx={styleHeaderBtn}>
            <Image
              width={130}
              height={30}
              layout="fixed"
              alt="logo"
              src={LogoAmplioNow}
            />
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
          <TextButton
            onClick={() => router.push("/templates")}
            style={drawerBtn}
          >
            Templates
          </TextButton>
          <TextButton
            onClick={() => router.push("/integration")}
            style={drawerBtn}
          >
            Integration
          </TextButton>
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
            <Image
              width={180}
              height={40}
              layout="fixed"
              alt="logo"
              src={LogoAmplioNow}
            />
          </Grid>
          <Grid item xs={6} md={7} sx={styleHeaderBtn}>
            <Grid item sx={styleHeaderBtn}>
              <TextButton
                onClick={() => router.push("/templates")}
                style={{ fontSize: 15 }}
              >
                Templates
              </TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton
                onClick={() => router.push("/integration")}
                style={{ fontSize: 15 }}
              >
                Integration
              </TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton
                onClick={() => router.push("/pricing")}
                style={{ fontSize: 15 }}
              >
                Pricing
              </TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton style={{ fontSize: 15 }}>What We Do</TextButton>
            </Grid>
            <Grid item sx={styleHeaderBtn}>
              <TextButton
                onClick={() => router.push("/features")}
                style={{ fontSize: 15 }}
              >
                Features
              </TextButton>
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
