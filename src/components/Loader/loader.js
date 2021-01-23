import React from "react";
import classes from "./loader.css";

const Loader = () => {
  return (
    <div className="loader-parent">
      <div className="spinner loader">
        <div className="blue-spinner"></div>
        <div className="gray-spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
