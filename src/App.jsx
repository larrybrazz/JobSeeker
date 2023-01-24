import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import SearchInput from "./Components/SearchInput";

// import {fetchJobs} from './Axios/axios.js';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Login from "./Axios/Login";
import Jobs from "./Components/Jobs";

function App({ loggedIn }) {
  return (
    <React.Fragment>
      <div className="marginNav">
        <Navbar />
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<Login loggedIn={loggedIn} />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
