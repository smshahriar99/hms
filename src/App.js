import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#178f01",
    },
  },
});

function App() {
  const theme = useTheme();
  return (
    <div className="Ap">
      <ThemeProvider theme={mdTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <CssBaseline />
          <Header></Header>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Main></Main>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
