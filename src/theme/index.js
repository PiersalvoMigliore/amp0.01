import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const headerCommonStyles = {
  fontFamily: "LexendDeca",
  fontWeight: "bold",
};

const theme = createTheme({
  typography: {
    fontFamily: "LexendDeca",
    h1: {
      ...headerCommonStyles,
      fontSize: "4em",
      [breakpoints.down("md")]: {
        fontSize: "2.5em",
      },
    },
    h2: {
      ...headerCommonStyles,
      fontSize: "1.5em",
      fontWeight: "normal",
      color: "#606060",
      [breakpoints.down("md")]: {
        fontSize: "1.5em",
        textAlign: "center",
      },
    },
    h3: {
      ...headerCommonStyles,
      fontSize: "2.5em",
      [breakpoints.down("md")]: {
        fontSize: "1.5em",
      },
    },
    h4: {
      ...headerCommonStyles,
      fontSize: "1.2em",
      [breakpoints.down("md")]: {
        fontSize: "2em",
      },
    },
    h5: { ...headerCommonStyles, fontSize: "1.2em" },
    h6: {
      ...headerCommonStyles,
      fontSize: "1.2em",
      [breakpoints.down("md")]: {
        fontSize: "1em",
      },
    },
    h7: {
      ...headerCommonStyles,
      fontSize: "1.3em",
      fontWeight: "normal",
      color: "#606060",
      [breakpoints.down("md")]: {
        fontSize: "1em",
        textAlign: "center",
      },
    },
  },
});

export default theme;
