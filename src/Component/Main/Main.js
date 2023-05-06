import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AddStudent from "../AddStudent/AddStudent";
import EditStudent from "../EditStudent/EditStudent";
import DeleteStudent from "../DeleteStudent/DeleteStudent";
import StudentDetails from "../StudentDetails/StudentDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Error404 from "../Error404/Error404";
import HeadingBar from "../HeadingBar/HeadingBar";
const Main = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <HeadingBar></HeadingBar>
            <Router>
              <Routes>
                <Route path="/dashBoard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/addStudent" element={<AddStudent />} />
                <Route path="/editStudent" element={<EditStudent />} />
                <Route path="/deleteStudent" element={<DeleteStudent />} />
                <Route path="/studentDetails" element={<StudentDetails />} />
                <Route exact path="/" element={<Dashboard />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Router>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
