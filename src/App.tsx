import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";
const profileUrl = `https://test.swipejobs.com/api/worker/${workerId}/profile`;
const jobDetailsUrl = `https://test.swipejobs.com/api/worker/${workerId}/matches`;

const App: React.FC = () => {
  const [profileData, setProfiledata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(profileUrl);
      result.json().then((json) => {
        setProfiledata(json);
      });
    };
    fetchData();
  }, []);

  const [jobDetailsData, setJobDetailsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(jobDetailsUrl);
      result.json().then((json) => {
        setJobDetailsData(json);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="bg-light-gray">
      <Navbar worker={profileData} />
      <Card jobData={jobDetailsData} />
    </div>
  );
};

export default App;
