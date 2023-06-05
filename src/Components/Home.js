import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import "../Styles/Home.css";
import img1 from "../Img/welcome.png";
import img2 from "../Img/waterfront.png";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: "12vh",
  },
  pic: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <img src={img1} className="home_img1" alt="welcome to pdx" />
      <Grid container className="gridContainer">
        <Grid item xs={4} className={classes.pic}>
          <img
            src={img2}
            className="about_img"
            alt="portland water front park"
          />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item sm={12} md={7}>
          <p className="home_intro">
            Portland, Oregon is a vibrant city in the Pacific Northwest region
            of the United States, and if it were a website, it would be a
            colorful and interactive one. The homepage would feature a beautiful
            image of the city skyline or a popular landmark, such as the iconic
            Portlandia statue.
            <br />
            <br />
            The city is situated at the confluence of the Willamette and
            Columbia rivers, which provides ample opportunities for outdoor
            activities such as hiking, biking, and kayaking. Portland is also
            known for its lush green parks and gardens, including the iconic
            International Rose Test Garden.
            <br />
            <br />
            In addition to its natural attractions, Portland boasts a thriving
            arts and culture scene, with numerous museums, galleries, and
            theaters showcasing local and international talent. The city is also
            home to a diverse array of restaurants, cafes, and breweries, making
            it a foodie's paradise.
            <br />
            <br />
            Portland is often recognized for its progressive values and
            commitment to sustainability, with a strong focus on eco-friendly
            practices and alternative transportation options such as biking and
            public transit.
            <br />
            <br />
            Overall, Portland offers a unique blend of natural beauty, cultural
            richness, and laid-back charm, making it a must-visit destination
            for anyone traveling to the Pacific Northwest.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
