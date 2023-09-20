import React from "react";
import "./ClassFind.css";
import { Link } from "react-router-dom";

const ClassFind = () => {
  return (
    <div className="class-find-area">
      <div className="class-find-content container">
        <p>class for you</p>
        <h3>
          Need Help Figuring Out Which Class Is Right for You or You Child?
        </h3>
        <div className="custom-btn">
          <button>
            <Link to="/">Find a class for me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassFind;
