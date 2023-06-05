import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css";
import { makeStyles } from "@material-ui/core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
    height: theme.spacing(5),
    width: theme.spacing(5),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    "&:hover": {
      color: "#FFD700",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className="footer">
      <h1 className="foot_info">
        More information about Portland can be find below
      </h1>
      <a href="https://www.instagram.com/portland/">
        <span className="sr-only">Ins</span>
        <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
      </a>
      <a href="https://www.travelportland.com/">
        <span className="sr-only">Ins</span>
        <FontAwesomeIcon className={classes.icon} icon={faLink} />
      </a>
      <a href="https://twitter.com/travelportland?lang=en">
        <span className="sr-only">Ins</span>
        <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
      </a>
    </div>
  );
}

export default Footer;
