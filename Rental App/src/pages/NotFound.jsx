import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div>
      <p className="Er404"> 404 NotFound...OOOPS</p>
      <Link to="/" className="home-button">
        {" "}
        Go to Home Page
      </Link>
    </div>
  );
};
