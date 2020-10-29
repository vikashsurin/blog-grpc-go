import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { CreateBlog, ReadBlog, UpdateBlog, DeleteBlog, listblog } from "./methods/blog";
import { createUser, deleteUser, readUser, updateUser } from "./methods/user";
import { login, logout } from "./methods/auth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => CreateBlog()}>CREATE</button>
        <button onClick={() => ReadBlog()}>READ</button>
        <button onClick={() => UpdateBlog()}>UPDATE</button>
        <button onClick={() => DeleteBlog()}>DELETE</button>
        <button onClick={() => listblog()}>LIST BLOG</button>
        <button onClick={() => createUser()}>CREATE USER</button>
        <button onClick={() => readUser()}>READ USER</button>
        <button onClick={() => updateUser()}>UPDATE USER</button>
        <button onClick={() => deleteUser()}>DELETE USER</button>
        <button onClick={() => login()}>LOGIN USER</button>
        <button onClick={() => logout()}>LOGOUT USER</button>
      </header>
    </div>
  );
}

export default App;
