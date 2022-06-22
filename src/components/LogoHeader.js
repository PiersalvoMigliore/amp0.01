import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { createBreakpoints } from "@mui/system";
import LogoAmplioNow from "..//images/LogoAmplioNow.png";

function LogoHeader() {
  const router = useRouter();
  const breakpoints = createBreakpoints({});
  const matches = useMediaQuery(breakpoints.down("lg"));
  return (
    <Box
      sx={
        !matches
          ? {
              marginLeft: "100px",
              padding: 3,
            }
          : {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 3,
            }
      }
    >
      <IconButton disableRipple onClick={() => router.push("/")}>
        <Image
          width={180}
          height={40}
          layout="fixed"
          alt="logo"
          src={LogoAmplioNow}
        />
      </IconButton>
    </Box>
  );
}

export default LogoHeader;
