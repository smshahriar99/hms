import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const AddStudent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
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
              Add Student
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth label="First Name" autoFocus />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Department Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Student ID" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Session" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Year" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Semister" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth label="Room Number" />
                </Grid>
                <Grid item xs={12}>
                  <label style={{ color: "#178f01", fontWeight: "bold" }}>
                    Admitaion Date
                  </label>
                  <TextField required fullWidth label="" type="date" />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Student Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddStudent;
