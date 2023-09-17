import React from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="join-area">
      <div className="join-area-bg-overlay"></div>
      <div className="join-area-content container">
        <p>Join Our Team</p>
        <h2>
          Being The Number <span>#1</span> is Our True Goals
        </h2>
        <div className="custom-btn">
          <button>
            <Link>JOIN WITH US</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
