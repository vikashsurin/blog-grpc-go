import React from "react";
import { NavLink } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">HomePage </NavLink>
      <NavLink to="/create"> CreatePost</NavLink>
    </div>
  );
};

export default Navbar;
