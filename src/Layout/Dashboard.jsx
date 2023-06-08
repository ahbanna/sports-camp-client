import React from "react";
import { FaEdge, FaHome, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../src/assets/logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 p-0 dashboard-sidebar">
          <div className="sidebar-logo d-flex">
            <img src={logo} alt="" />
            <h3>Sports Camp</h3>
          </div>
          <div className="sideabar-menu">
            <ul>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <FaEdge></FaEdge> Manage Classes
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
