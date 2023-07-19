import React from "react";
import { Link } from "react-router-dom";
import "../Unauthorized.scss";

import rick2 from "../assets/rick2.png"
// import logo from './logo.svg';


const Unauthorized = () => {
  return (
    <div className="container">
      {/* <div class="gandalf">
        <div class="fireball" />
        <div class="skirt" />
        <div class="sleeves" />
        <div class="shoulders">
          <div class="hand left" />
          <div class="hand right" />
        </div>
        <div class="head">
          <div class="hair" />
          <div class="beard" />
        </div>
      </div> */}
      <div class="message">


      {/* <img src="./logo.svg" alt="logo" /> */}
      <img style={{width:"40%"}} src={rick2} className="App-logo" alt="logo" />


        <h1>403 - Wubba Lubba Dub Dub!</h1>
        <p>
          Uh oh, Rick is blocking the way!
          <br />
          “I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it.”
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Unauthorized;
