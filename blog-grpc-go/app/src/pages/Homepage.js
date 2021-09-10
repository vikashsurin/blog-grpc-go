import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { selectBlogList } from "../redux/blog/blogSlice";

import { useSelector } from "react-redux";
function Homepage() {
  const name = process.env.REACT_APP_NAME;
  // console.log("from env ", name);
  // console.log(process.env);
  let history = useHistory();
  const res = useSelector(selectBlogList);
  // console.log(res);

  const handleClick = (id) => {
    history.push(`/blog/${id}`);
  };

  // list ...
  const list = res.blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <h2 onClick={() => handleClick(blog.id)}>{blog.title}</h2>
        {/* <p>{blog.content}</p> */}
      </div>
    );
  });

  return (
    <div>
      <h1>HOMEPAGE</h1>
      {list}
    </div>
  );
}
export default Homepage;
