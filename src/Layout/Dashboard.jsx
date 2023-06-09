import React from "react";
import {
  FaAward,
  FaEdge,
  FaFolderPlus,
  FaHome,
  FaUsers,
  FaWallet,
  FaCheckDouble,
  FaHeart,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // TODO: admin functionality should apply dynamically
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
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
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/manageusers">
                      <FaUsers></FaUsers> Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageclasses">
                      <FaWallet></FaWallet> Manage Classes
                    </NavLink>
                  </li>
                </>
              ) : isInstructor ? (
                <>
                  <li>
                    <NavLink to="/dashboard/addclass">
                      <FaFolderPlus></FaFolderPlus> Add a Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myclasses">
                      <FaAward></FaAward> My Classes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/selectedclasses">
                      <FaHeart></FaHeart> Selected Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/enrolledclesses">
                      <FaCheckDouble></FaCheckDouble> Enrolled Classes
                    </NavLink>
                  </li>
                </>
              )}
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
