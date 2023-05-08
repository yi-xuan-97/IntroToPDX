import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "30px",
    fontWeight: "800",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    marginLeft: "3vw",
    marginTop: theme.spacing(0.5),
    fontWeight: "600",
    "&:hover": {
      color: "#FF7F50",
      fontWeight: "800",
      fontSize: "28px",
      marginTop: theme.spacing(0),
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#708090" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Typography variant="h5" className={classes.title}>
          Welcome to Portland
        </Typography>
          <Link to="/" className={classes.link} style={{ display: "none" }}>
            /
          </Link>
          <Link to="/Home" className={classes.link}>
            Home
          </Link>
          <Link to="/AboutPortland" className={classes.link}>
            About Portland
          </Link>
          <Link to="/Things" className={classes.link}>
            Things to do
          </Link>
          <Link to="/Todo" className={classes.link}>
            Todo List
          </Link>
          <Link to="/About" className={classes.link}>
            About Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
