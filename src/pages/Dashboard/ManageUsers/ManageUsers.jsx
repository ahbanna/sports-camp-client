// import React, { useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { Table } from "react-bootstrap";
// import Swal from "sweetalert2";

// const ManageUsers = () => {
//   // const { user } = useContext(AuthContext);

//   // for laod all users from database starts
//   const { data: users = [], refetch } = useQuery(["users"], async () => {
//     const res = await fetch("https://uppity-ants-production.up.railway.app/users");
//     return res.json();
//   });
//   // for laod all users from database end

//   // Make user as admin starts
//   const handleMakeAdmin = (user) => {
//     fetch(`https://uppity-ants-production.up.railway.app/users/admin/${user._id}`, {
//       method: "PATCH",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is admin now`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };
//   // Make user as admin end

//   return (
//     <div>
//       <h2>Manage users</h2>
//       <h2>{users.length}</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>SL</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 {user.role === "admin"
//                   ? "Admin"
//                   : user.role === "instructor"
//                   ? "Instructor"
//                   : "Student"}
//               </td>
//               <td>
//                 <button onClick={() => handleMakeAdmin(user)}>
//                   Make Admin
//                 </button>
//                 <button onClick={() => handleMakeInstructor(user)}>
//                   Make Instructor
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ManageUsers;

import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import "./ManageUsers.css";
import { Slide } from "react-awesome-reveal";

const ManageUsers = () => {
  // for loading all users from the database
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://uppity-ants-production.up.railway.app/users"
    );
    return res.json();
  });

  // Make user as admin or instructor
  const handleMakeRole = (user, role) => {
    fetch(
      `https://uppity-ants-production.up.railway.app/users/${role}/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now ${role}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // TODO: set default user, make button disable when click one, button design
  // // Function to set the default role for new users
  // const setDefaultRole = (user) => {
  //   if (!user.role) {
  //     fetch(`https://uppity-ants-production.up.railway.app/users/default-role/${user._id}`, {
  //       method: "PATCH",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.modifiedCount) {
  //           refetch();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: `${user.name}'s role set to default`,
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });
  //   }
  // };

  // // Call setDefaultRole for each user on initial load
  // useEffect(() => {
  //   users.forEach((user) => {
  //     setDefaultRole(user);
  //   });
  // }, [users]);

  return (
    <div className="manage-users-area">
      <Slide triggerOnce>
        <h3 className="main-heading text-center">Manage Users</h3>
      </Slide>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin"
                  ? "Admin"
                  : user.role === "instructor"
                  ? "Instructor"
                  : "Student"}
              </td>
              <td>
                {user.role !== "admin" && (
                  <>
                    <button onClick={() => handleMakeRole(user, "admin")}>
                      Make Admin
                    </button>
                    <button onClick={() => handleMakeRole(user, "instructor")}>
                      Make Instructor
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
