import React from "react";
import { Link } from "react-router-dom";

// Example of a functional component
// jumbotron is a built in bootstrap class
const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    {/* React router handles clicks on any Link component so that page won't post back to server, want to handle this ourselves with react router */}
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

// This allows you to import the function to other files
export default HomePage;
