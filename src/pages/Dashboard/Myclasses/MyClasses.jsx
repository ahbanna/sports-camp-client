import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyClassesCard from "../MyClassesCard/MyClassesCard";
import "./MyClasses.css";
import { Slide } from "react-awesome-reveal";
import useTitle from "../../../hooks/useTitle";

const MyClasses = () => {
  useTitle("My Classes");
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const url = `https://sports-camp-server-unqt1ouq2-ahbanna.vercel.app/myclasses?email=${user?.email}`;
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
      <Slide triggerOnce>
        <div className="section-title2 text-center">
          <h3 className="main-heading">My Classes</h3>
        </div>
      </Slide>
      <div className="all-classes">
        {myClasses.map((myClass) => (
          <MyClassesCard key={myClass._id} myClass={myClass}></MyClassesCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
