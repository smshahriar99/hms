import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Error404 = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Card
            sx={{
              minWidth: 275,
              minHeight: 600,
              padding: "8px 70px 70px 70px",
              m: "50px 0",
              backgroundColor: "#dfffdf",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#d32f2f",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                404 Error
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                This page is not exist. 404 error.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error404;
