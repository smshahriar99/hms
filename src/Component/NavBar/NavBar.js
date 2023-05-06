import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItemLists from "../MenuItemLists/MenuItemLists";
import logo from "../../logo.png";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    backgroundColor: "#dfffdf",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Nav = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      }}
    >
      <div margin="10px">
        <img src={logo} alt="" width={"70%"} style={{ margin: "10px" }} />
      </div>
      <Toolbar
        sx={{
          pr: "24px",
          margin: "0 auto",
        }}
      >
        <IconButton
          edge="start"
          color="primary"
          aria-label="open drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Divider />
      <List
        component="nav"
        sx={{
          backgroundColor: "#dfffdf",
        }}
      >
        <MenuItemLists></MenuItemLists>
      </List>
    </Drawer>
  );
};

export default Nav;
