import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "Instructors",
        element: <Instructors></Instructors>,
        loader: () => fetch("http://localhost:5000/Instructors"),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
