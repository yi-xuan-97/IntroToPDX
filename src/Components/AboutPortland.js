import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import temp_data from "../Data/temp.json";
import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import "../Styles/AboutPortland.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ImageListItem from "@material-ui/core/ImageListItem";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
  card: {
    width: "25vw",
  },
  tempContainer: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  root: {
    width: "28vw",
    listStyleType: "none",
  },
  imgG: {
    overflow: "hidden",
    backgroundColor: "black",
  },
  imageList: {
    height: "35vh",
    flexWrap: "nowrap",
  },
  media: {
    height: 140,
  },
  arrow: {
    width: "5vw",
    fontSize: 60,
    marginTop: "10vh",
    "&:hover": {
      marginTop: "9vh",
      color: "#323232",
      fontSize: 80,
    }, 
  },
}));

function AboutPortland() {
  const classes = useStyles();

  const [unit, setunit] = useState("metric");
  const [u, setu] = useState("°C");
  const [icon, seticon] = useState("04d");
  const [temp, settemp] = useState(0);
  const [temp_max, settemp_max] = useState(0);
  const [temp_min, settemp_min] = useState(0);
  const [des, setdes] = useState("Cloud");
  const [img_arr, setimgarr] = useState([]);

  const key1 = "677b08102882beabdba992496310ea0c";
  const key2 = "y1vXu0rMUQPMAzJ8HTwW7E5Wzfy1O5eH1xxThZbxbp8";
  const api1 = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=5746545&appid=${key1}&units=${unit}`;
  const api2 = `https://api.unsplash.com/search/photos?per_page=12&query=portland&client_id=${key2}`;

  const get_weather = () => {
    axios
      .get(`${api1}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "GET,PUT,POST,DELETE,OPTIONS",
        },
      })
      .then((res) => {
        console.log(res);
        settemp(res.data.main.temp);
        settemp_max(res.data.main.temp_max);
        settemp_min(res.data.main.temp_min);
        seticon(res.data.weather[0].icon);
        setdes(res.data.weather[0].description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const get_img = async () => {
    await axios
      .get(`${api2}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "GET,PUT,POST,DELETE,OPTIONS",
        },
      })
      .then((res) => {
        console.log(res);
        setimgarr(res.data.results);
        return res.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const change_unit = () => {
    if (unit === "metric") {
      setunit("imperial");
      setu("°F");
    } else {
      setunit("metric");
      setu("°C");
    }
  };

  const cardData = () => {
    let i = -1;
    if (img_arr) {
      return img_arr.map((data) => {
        i += 1;
        return (
          <div>
            <ImageListItem className={classes.root}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={data.urls.small}
                  title={data.alt_desription}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {temp_data[i].value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {temp_data[i].label}
                  </Typography>
                </CardContent>
              </Card>
            </ImageListItem>
          </div>
        );
      });
    }
  };

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <ArrowBackIosRounded
        className={classes.arrow}
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        Left
      </ArrowBackIosRounded>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <ArrowForwardIosRounded
        className={classes.arrow}
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        Right
      </ArrowForwardIosRounded>
    );
  }

  useEffect(() => {
    get_weather();
  }, [unit]);

  useEffect(() => {
    get_img();
  }, []);

  return (
    <div className="aboutportland">
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <p className="welcome">
            Before embarking on your journey to Portland, it would behoove you
            to check the forecast as the region is known for its rainy weather.
            Come prepared with appropriate attire and protective gear to ensure
            a pleasant stay
          </p>
        </Grid>
        <Grid item xs={1}>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />

          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>°C</Grid>
              <Grid item>
                <Switch
                  onChange={change_unit}
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Grid>
              <Grid item>°F</Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <p className="temp_des">
            {temp}
            {u}
          </p>
          <p className="temp_des2">
            {temp_min}
            {u} ~ {temp_max}
            {u}
          </p>
          <p className="temp_des">{des}</p>
        </Grid>
        <Grid className={classes.tempContainer} container spacing={2}>
          <Grid item className="imgG" xs={12}>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
              {cardData()}
            </ScrollMenu>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPortland;
