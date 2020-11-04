import React, { useState } from "react";

import { useDispatch } from "react-redux";

// import { }

function set() {
  localStorage.setItem("token", "this is a token");
}

export const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginData;

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button onClick={() => set()}>set token</button>
      </form>
    </div>
  );
};

export default Login;
