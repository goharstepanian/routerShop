import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-description">
        Sorry, we couldn't find the page you're looking for.
      </p>
    </div>
  );
};

export default Error;
