import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import data from '../Data/temp.json';

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));

function AboutPortland() {

  const classes = useStyles();

    return (
      <div className="aboutportland">
        <h1>ABOUT PORTLAND</h1>

      </div>
    );
  }
  
export default AboutPortland;