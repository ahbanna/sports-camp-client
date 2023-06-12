// import React from "react";
// import { Navbar, Nav, Container, Image } from "react-bootstrap";
// import "./NavBar.css";

// const NavBar = ({ loggedIn, userProfilePicture }) => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">
//           <Image src="/logo.png" alt="Website Logo" width="30" height="30" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/instructors">Instructors</Nav.Link>
//             <Nav.Link href="/classes">Classes</Nav.Link>
//           </Nav>
//           <Nav>
//             {loggedIn ? (
//               <>
//                 <Nav.Link href="/dashboard">
//                   <Image
//                     src={userProfilePicture}
//                     alt="User Profile"
//                     width="30"
//                     height="30"
//                     roundedCircle
//                   />
//                 </Nav.Link>
//               </>
//             ) : (
//               <Nav.Link href="/login">Login</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, { useContext } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Darkreader from "react-darkreader";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <div className="header-area">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <NavLink to="/">
            <Image src={logo} alt="Sports Camp" width="100" height="40" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/instructors">Instructors</NavLink>
              <NavLink to="/classes">Classes</NavLink>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <p className="user-name">{user.displayName}</p>
                  <NavLink to="/dashboard">
                    <Image
                      src={user.photoURL}
                      alt="User Profile"
                      width="30"
                      height="30"
                      roundedCircle
                    />
                  </NavLink>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
              <Darkreader></Darkreader>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
