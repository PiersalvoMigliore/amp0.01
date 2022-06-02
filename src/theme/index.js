import { createTheme } from "@mui/material/styles";

const headerCommonStyles = {
  fontFamily: "LexendDeca",
  fontWeight: "bold",
};

const theme = createTheme({
  typography: {
    fontFamily: "LexendDeca",
    h1: { ...headerCommonStyles, fontSize: "4em" },
    h2: {
      ...headerCommonStyles,
      fontSize: "1.5em",
      fontWeight: "normal",
      color: "#606060",
    },
    h3: { ...headerCommonStyles, fontSize: "2.5em" },
  },
});

export default theme;
