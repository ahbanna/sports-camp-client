import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyClassesCard from "../MyClassesCard/MyClassesCard";
import "./MyClasses.css";

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
      <div className="all-classes">
        {myClasses.map((myClass) => (
          <MyClassesCard key={myClass._id} myClass={myClass}></MyClassesCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
