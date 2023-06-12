import React from "react";
import "./ErrorPage.css";
import Lottie from "lottie-react";
import errorIcon from "../../assets/error-page-icon.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-icon">
          <Lottie animationData={errorIcon} loop={true} />
        </div>
        <div className="error-text">
          <h3>Page Not Found</h3>
          <div className="custom-btn">
            <button>
              <Link to="/">Go To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
