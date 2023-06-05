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
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import key from "../config.json";
import img1 from "../Img/keep.jpeg";
import img2 from "../Img/hike.jpeg";
import img3 from "../Img/food.jpeg";
import img4 from "../Img/value.webp";

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
  container: {
    marginLeft: "2%",
    marginRight: "2%",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
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

  const api1 = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=5746545&appid=${key.key1}&units=${unit}`;
  const api2 = `https://api.unsplash.com/search/photos?per_page=12&query=portland&client_id=${key.key2}`;

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
        <Grid item xs={6} sm={9} >
          <p className="welcome">
            Prepare for rain in Portland throughout the year as it can occur at
            any time and any place
          </p>
        </Grid>
        <Grid item xs={2} sm={1}>
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
          <p>
            Request demo API{" "}
            <a href="https://cors-anywhere.herokuapp.com/corsdemo">here</a>{" "}
            first{" "}
          </p>
        </Grid>
        <Grid item xs={3} sm={2}>
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
        <Grid container className={classes.container} spacing={1}>
          <Grid className={classes.image} item xs={5}>
            <img
              src={img1}
              alt="sign of keep portland weird"
              className="img1"
            />
          </Grid>
          <Grid item className={classes.image} xs={1}></Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="title">Cultural uniqueness</h1>
            <p className="about_info">
              Portland is known for its vibrant and alternative culture. It
              embraces individuality, creativity, and unconventional thinking.
              The city has a thriving arts scene, a strong emphasis on local
              businesses, and a commitment to sustainability and
              eco-friendliness.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="title">Natural beauty</h1>
            <p className="about_info">
              Portland is surrounded by stunning natural beauty. The city is
              located in the Pacific Northwest region, with easy access to
              picturesque landscapes, including nearby mountains, forests, and
              the Columbia River Gorge. The abundance of green spaces and parks
              within the city also adds to its appeal.
            </p>
          </Grid>
          <Grid item className={classes.image} xs={1}></Grid>
          <Grid item className={classes.image} xs={5}>
            <img src={img2} alt="Multnomah Falls" className="img1" />
          </Grid>

          <Grid item className={classes.image} xs={5}>
            <img
              src={img3}
              alt="sign of keep portland weird"
              className="img1"
            />
          </Grid>
          <Grid item className={classes.image} xs={1}></Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="title">Food and drink scene</h1>
            <p className="about_info">
              Portland has a renowned food and drink scene. It is home to a
              plethora of independent restaurants, food carts, breweries, and
              coffee shops. The city has gained recognition for its
              farm-to-table approach, focus on local and organic ingredients,
              and diverse culinary offerings.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="title">Outdoor recreation</h1>
            <p className="about_info">
              Portland offers numerous opportunities for outdoor activities.
              Residents and visitors can enjoy hiking, biking, kayaking, skiing,
              and other recreational pursuits within close proximity to the
              city. The mild climate and nearby natural attractions make it an
              ideal destination for outdoor enthusiasts.
            </p>
          </Grid>
          <Grid item className={classes.image} xs={1}></Grid>
          <Grid item className={classes.image} xs={5}>
            <img src={img4} alt="Multnomah Falls" className="img1" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPortland;
