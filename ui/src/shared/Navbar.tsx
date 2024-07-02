import React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={NavLink} to="/offset">
          Offset Pagination
        </Button>
        <Button color="inherit" component={NavLink} to="/cursor">
          Cursor Pagination
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
