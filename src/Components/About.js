import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import img from "../Img/cannon.png";
import "../Styles/About.css";

const useStyles = makeStyles((theme) => ({
  pic: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textField: {
    width: "80%",
    height: "8vh",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btn: {
    marginTop: "12vh",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className="about">
      <Grid container className="gridContainer">
        <Grid item xs={4} className={classes.pic}>
          <img
            src={img}
            className="about_img"
            alt="portland water front park"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <p className="para">
            {" "}
            Hello there! I'm thrilled that you're interested in this website.
            I've had the pleasure of calling Portland my home for quite some
            time now, and it's become a second hometown to me. As an
            international student, I've had the opportunity to explore and
            experience Portland in a unique way, and I want to share that with
            you through this website. <br /> <br /> My goal is to provide you
            with a comprehensive introduction to Portland, including its rich
            culture, stunning natural beauty, and vibrant food and drink scene.
            Whether you're planning a trip to Portland or simply curious about
            this amazing city, I hope this website will be a valuable resource
            for you. <br /> <br /> Thank you for visiting, and I hope you enjoy
            exploring all that Portland has to offer!
          </p>
        </Grid>
      </Grid>
      <form className="about_form">
        <p className="about_info">
          Let me know anything you would like to share that you think could be
          interesting or your thought on this website or anything that you would
          like to say to me!
        </p>
        <div className="form_info">
          <TextField
            required
            placeholder="Your name here"
            variant="outlined"
            id="form_name"
            label="Name"
            name="name"
            className={classes.textField}
          />
          <TextField
            required
            variant="outlined"
            placeholder="youremail@gmail.com"
            id="form_email"
            label="Email"
            name="email"
            className={classes.textField}
          />
          <TextField
            required
            variant="outlined"
            placeholder="Hey Yixuan, I know a cool event....."
            id="form_message"
            name="message"
            aria-label="message"
            multiline
            rows={4}
            label="Leave me a message"
            className={classes.textField}
          />
        </div>
        <Button
          variant="contained"
          className={classes.btn}
          type="submit"
          color="primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default About;
