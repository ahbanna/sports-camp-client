import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const url = `http://localhost:5000/myclasses?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyClasses(data);
      });
  }, []);
  return (
    <div>
      <h2>My classes are: </h2>
      {myClasses.map((myClass) => (
        <h2>{myClass.className}</h2>
      ))}
    </div>
  );
};

export default MyClasses;
