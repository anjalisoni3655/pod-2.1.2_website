import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto Condensed', cursive",
    h3: {
      fontSize: "2.7rem",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
      fontWeight: "550",
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#06c",
    },
    inherit: {
      main: "#000",
    },
  },
});

export default theme;
