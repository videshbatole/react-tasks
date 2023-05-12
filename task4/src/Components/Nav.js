import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";

function Nav() {
  return (
    <nav class="nav">
      <Router>
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>

        <header class="site-navbar site-navbar-target" role="banner">
          <div class="container">
            <div class="row align-items-center position-relative">
              <div class="col-3">
                <div class="site-logo">
                  <Link to={"/Nav"} class="font-weight-bold">
                      Brand
                    </Link>
                </div>
              </div>

              <div class="col-9  text-right">
                <span class="d-inline-block d-lg-none">
                  <Link
                      to={"/Home"}
                      class="text-primary site-menu-toggle js-menu-toggle py-5"
                    >
                      <span class="icon-menu h3 text-white"></span>
                    </Link>
                </span>

                <nav
                  class="site-navigation text-right ml-auto d-none d-lg-block"
                  role="navigation"
                >
                  <ul class="site-menu main-menu js-clone-nav ml-auto ">
                    <li class="active">
                      <Link to={"/Home"} class="nav-link">
                          Home
                        </Link>
                    </li>
                    
                    
                    <li>
                      <Link to={"/AboutUs"}  className="nav-link">
                         About us
                        </Link>
                    </li>
                    <li>
                      <Link to={"/Contact"}  className="nav-link">
                          Contact
                        </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="hero"></div>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs pageName="About US" />} />
          <Route path="/home" element={<Home  pageName="Home"/>} />
          <Route path="/contact" element={<Contact  pageName="contact"/>} />
        </Routes>
      </Router>
    </nav>
  );
}

export default Nav;
