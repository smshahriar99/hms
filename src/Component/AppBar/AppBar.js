import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import MenuItemLists from "../MenuItemLists/MenuItemLists";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
const AppBar = () => {
  const theme = useTheme();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              display: "none",
              [theme.breakpoints.down("sm")]: {
                display: "block",
              },
            }}
          >
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)} sx={{ left: "40%" }}>
            <MenuItemLists></MenuItemLists>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default AppBar;
