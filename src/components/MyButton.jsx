import React from "react";
import "./MyButton.css";

const MyButton = ({ btnLink, btnText }) => {
  return (
    <div>
      <button className="custom-button">
        <a href={btnLink}>{btnText}</a>
      </button>
    </div>
  );
};

export default MyButton;
