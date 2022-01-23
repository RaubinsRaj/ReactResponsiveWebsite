import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./Navbar";


class App extends Component
 {
  render(){
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Routes>
      <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/service" element= {<Service/>}/>
       <Route path="/contact" element= {<Contact/>}/>
       </Routes>
       {/* <Navigate to="/" /> */}
      </div>
    </Router>
    // <div>
    // <Navbar/>  
    // <Routes>
    //    <Route path="/" element= {<Home/>}/>
    //    <Route path="/about" element= {<About/>}/>
    //    <Route path="/service" element= {<Service/>}/>
    //    <Route path="/contact" element= {<Contact/>}/>
    //   </Routes>
    //   <Navigate to="/" />
    // </div>
  );
}
 }

export default App;
