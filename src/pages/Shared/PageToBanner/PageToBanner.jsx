import React from "react";
import { FaHome } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./PageToBanner.css";

const PageToBanner = ({ title }) => {
  return (
    <div className="breadcrumbs-area">
      <h3>{title}</h3>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
          </li>
          <li className="active">
            <BiCaretRight></BiCaretRight>
            {title}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageToBanner;
