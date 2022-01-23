import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Common from "./Common";
const Home = () => {
  return (
    <div>
    <Common 
    name="Start your career with" 
    visit="/service" 
    btname="Get Started"/>
    </div>
  );
};

export default Home;
