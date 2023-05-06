import React from "react";
import Box from "@mui/material/Box";
import PeopleIcon from "@mui/icons-material/People";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";

const Dashboard = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                minWidth: 275,
                padding: "8px 70px 70px 70px",
                m: "50px 0",
                backgroundColor: "#dfffdf",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#178f01",
                    textAlign: "center",
                  }}
                >
                  <PeopleIcon sx={{ width: "4em", height: "4em" }} />
                </Typography>

                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Total Students
                </Typography>
                <Typography
                  sx={{
                    color: "#178f01",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  500
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                minWidth: 275,
                padding: "8px 70px 70px 70px",
                m: "50px 0",
                backgroundColor: "#dfffdf",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#178f01",
                    textAlign: "center",
                  }}
                >
                  <PaidIcon sx={{ width: "4em", height: "4em" }} />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Total Paid Ammount
                </Typography>
                <Typography
                  sx={{
                    color: "#178f01",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  20000 TK
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                minWidth: 275,
                padding: "8px 70px 70px 70px",
                m: "50px 0",
                backgroundColor: "#dfffdf",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#d32f2f",
                    textAlign: "center",
                  }}
                >
                  <PaidIcon sx={{ width: "4em", height: "4em" }} />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Total Due Ammount
                </Typography>
                <Typography
                  sx={{
                    color: "#d32f2f",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  30000 TK
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                minWidth: 275,
                padding: "8px 70px 70px 70px",
                m: "50px 0",
                backgroundColor: "#dfffdf",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#d32f2f",
                    textAlign: "center",
                  }}
                >
                  <PeopleIcon sx={{ width: "4em", height: "4em" }} />
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Number of Student with Due
                </Typography>
                <Typography
                  sx={{
                    color: "#d32f2f",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  150
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
