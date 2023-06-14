import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
import { AuthContext } from "../providers/AuthProvider";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://uppity-ants-production.up.railway.app",
});

const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  const { logOut } = useContext(AuthContext);
  // const { logOut } = useAuth();
  const navigate = useNavigate();

  // const axiosSecure = axios.create({
  //   baseURL: "https://uppity-ants-production.up.railway.app",
  // });

  useEffect(() => {
    // 1. intercept requset client to server
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // 2. intercept requset server to client
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
