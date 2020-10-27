import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { CreateBlog, ReadBlog,UpdateBlog ,DeleteBlog} from "./methods/blog";
import { blogID } from "./methods/blog";
function App() {
  // console.log("blogid from main", blogID);
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
        <button onClick={()=>CreateBlog()}>CREATE</button>
        <button onClick={()=>ReadBlog()}>READ</button>
        <button onClick={()=>UpdateBlog()}>UPDATE</button>
        <button onClick={()=>DeleteBlog()}>DELETE</button>
      </header>
    </div>
  );
}

export default App;
