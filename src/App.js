import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Features from "./components/pages/Features";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Location from "./components/pages/Location";
import MyGallery from "./components/pages/MyGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/location" component={Location} />
        <Route path="/features" component={Features} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/services" component={Services}/>
        <Route path="/gallery" component={MyGallery}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
