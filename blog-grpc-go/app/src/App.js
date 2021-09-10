import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import {
  CreateBlog,
  ReadBlog,
  UpdateBlog,
  DeleteBlog,
  listblog,
  blogID,
} from "./methods/blog";
import { createUser, deleteUser, readUser, updateUser } from "./methods/user";
import { login, logout } from "./methods/auth";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import UpdatePost from "./components/UpdatePost";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  createBlogAsync,
  listBlogAsync,
  selectBlog,
} from "./redux/blog/blogSlice";
import CreatePost from "./pages/CreatePost";

const Hello = () => {
  return <div>hello</div>;
};
function App() {
  const blogState = useSelector(selectBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBlogAsync());
  }, []);
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/hello" component={Hello} /> */}
          <Route exact path="/blog/:id" component={BlogPost} />
          <Route exact path="/blog" component={BlogPost} />
          <Route exact path="/blog/:id/edit" component={UpdatePost} />
          <Route exact path="/create" component={CreatePost} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/auth" component={Auth} /> */}
          {/* <Route exact path="/logout" component={Auth} /> */}
          {/* <Route exact path="/posts" component={Posts} /> */}
          {/* <Route exact path="/create-profile" component={CreateProfile} /> */}
          {/* <Route exact path="/edit-profile" component={EditProfile} /> */}
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute exact path="/add-post" component={AddPost} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

// <div className="App">
// <header className="App-header">
//   <div>
//     <p>{blogState.title}</p>
//     <p>{blogState.author}</p>
//     <p>{blogState.content}</p>
//   </div>
//   <a>Learn React</a>
//   <button onClick={() => dispatch(createBlogAsync("new Title"))}>
//     CREATE
//   </button>
//   <button onClick={() => ReadBlog()}>READ</button>
//   <button onClick={() => UpdateBlog()}>UPDATE</button>
//   <button onClick={() => DeleteBlog()}>DELETE</button>
//   <button onClick={() => dispatch(listBlogAsync())}>LIST BLOG</button>
//   <button onClick={() => createUser()}>CREATE USER</button>
//   <button onClick={() => readUser()}>READ USER</button>
//   <button onClick={() => updateUser()}>UPDATE USER</button>
//   <button onClick={() => deleteUser()}>DELETE USER</button>
//   <button onClick={() => login()}>LOGIN USER</button>
//   <button onClick={() => logout()}>LOGOUT USER</button>
// </header>
// <div>
//   <Homepage />
// </div>
// </div>
