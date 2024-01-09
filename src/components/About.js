import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I have been married 17 years, I have two amazing boys, and I can't wait to start my career as a developer!</p>
    <img src={image} alt='I made this'/>
  </div>
  )
}

export default About;
