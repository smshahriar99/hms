import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "@mui/material";

const buttonStyles = {
  color: "#178f01",
  "& .MuiListItemIcon-root": {
    color: "#178f01",
  },
  ":hover": {
    bgcolor: "#178f01",
    color: "#ffffff",
    "& .MuiListItemIcon-root": {
      color: "#ffffff",
    },
  },
};

const MenuItemLists = () => {
  return (
    <React.Fragment>
      <Link href="dashBoard" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link href="/login" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItemButton>
      </Link>
      <Link href="/register" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <HowToRegIcon />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItemButton>
      </Link>
      <Link href="/studentDetails" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Student List" />
        </ListItemButton>
      </Link>
      <Link href="/addStudent" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Student" />
        </ListItemButton>
      </Link>
      <Link href="/editStudent" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <BorderColorIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Student" />
        </ListItemButton>
      </Link>
      <Link href="/deleteStudent" underline="none">
        <ListItemButton sx={buttonStyles}>
          <ListItemIcon>
            <RestoreFromTrashIcon />
          </ListItemIcon>
          <ListItemText primary="Delete Student" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default MenuItemLists;
