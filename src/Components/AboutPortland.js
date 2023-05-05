import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import data from "../Data/temp.json";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));

function AboutPortland() {

  const get_weather = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=5746545&appid=677b08102882beabdba992496310ea0c',
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "GET,PUT,POST,DELETE,OPTIONS",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  get_weather();
  const classes = useStyles();

  return (
    <div className="aboutportland">
      <h1>ABOUT PORTLAND</h1>
    
    </div>
  );
}

export default AboutPortland;
