import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const EditStudent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
  };
  const mdTheme = createTheme({
    palette: {
      primary: {
        main: "#178f01",
      },
      secondary: {
        main: "#178f01",
      },
    },
  });
  return (
    <ThemeProvider theme={mdTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          sx={{
            padding: "8px 70px 70px 70px",
            m: "50px 0",
            backgroundColor: "#dfffdf",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "#178f01" }}>
              Edit Student
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Student ID"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Department"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Edit Student
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default EditStudent;
