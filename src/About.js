import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Common from "./Common";

const About= ()=> {
  return (
    <div>
    <Common 
    name="Welcome to about Page" 
    visit="/contact" 
    btname="Contact Now"/>
    </div>
  );
}

export default About;