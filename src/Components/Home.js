import React from "react";
import "../Styles/Home.css";
import img1 from "../Img/welcome.png";

function Home() {
  return (
    <div className="home">
      <img src={img1} alt="welcome to pdx" />
      <p className="home_intro">
        Portland is a vibrant and eclectic city located in the Pacific Northwest
        region of the United States. It is the largest city in the state of
        Oregon and is known for its natural beauty, thriving arts and culture
        scene, and progressive values.
      </p>
    </div>
  );
}

export default Home;
