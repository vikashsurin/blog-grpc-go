import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { selectUser } from "../redux/user/userSice";

export const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token from dash : ", token);
  });
  const state = useSelector(selectUser);
  console.log(state);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
