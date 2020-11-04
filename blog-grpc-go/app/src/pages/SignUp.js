import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createUserAsync, selectUser } from "../redux/user/userSice";

export const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(selectUser);
  console.log("from signup ", state.user);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserAsync(name, email, password));
    setUserData({
      name: "",
      email: "",
      password: "",
    });

    history.push("/user/dashboard");
  };

  return (
    <div>
      <h1>sign up</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  );
};

export default SignUp;
