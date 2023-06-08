// import React, { useContext } from "react";
// import { Button } from "react-bootstrap";
// import { FaGoogle } from "react-icons/fa";
// import "./SocialLogin.css";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";

// const SocialLogin = () => {
//   const { signInWithGoogle } = useContext(AuthContext);
//   // navigate starts.it use when user successfully login go to desire page
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   // navigate end
//   const handleGoogleSignIn = () => {
//     signInWithGoogle().then((result) => {
//       const loggedInUser = result.user;
//       console.log(loggedInUser);
//       navigate(from, { replace: true });
//     });
//   };
//   return (
//     <div>
//       <div className="google-login">
//         <h4>OR</h4>
//         <Button onClick={handleGoogleSignIn}>
//           <FaGoogle></FaGoogle> Login With Google
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SocialLogin;

import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import "./SocialLogin.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  // navigate starts.it use when user successfully login go to desire page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // navigate end
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="google-login">
        <h4>OR</h4>
        <Button onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle> Login With Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
