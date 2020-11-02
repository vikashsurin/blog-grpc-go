import React, { useEffect, useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  readBlogAsync,
  updateBlogAsync,
  selectBlog,
} from "../redux/blog/blogSlice";

export const UpdatePost = () => {
  const { id } = useParams();
  const history = useHistory();

  // declare data state
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = data;

  // declare dispatch and state.
  const dispatch = useDispatch();
  const state = useSelector(selectBlog);

  // first render
  useEffect(() => {
    dispatch(readBlogAsync(id));
    setData({ ...data, title: state.title, content: state.content });
    console.log(state);
  }, [id, state]);

  // handle change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log("changed");
  };

  // submit update request
  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    dispatch(updateBlogAsync(id, title, content));
    history.push(`/blog/${id}`);
  };

  return (
    <div>
      <h1>Update Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UpdatePost;
