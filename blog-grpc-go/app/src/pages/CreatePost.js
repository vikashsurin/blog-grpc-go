import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createBlogAsync } from "../redux/blog/blogSlice";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [blog, setBlog] = useState({
    author: "",
    title: "",
    content: "",
  });
  const { author, title, content } = blog;

  // handle Change
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (author == "" || title == "" || content == "") {
      console.log("error");
      return;
    }
    dispatch(createBlogAsync(author, title, content));
    setBlog({ author: "", title: "", content: "" });
    history.push("/");
  };

  return (
    <div>
      <h1>create post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="author"
          value={author}
          placeholder="author"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="content"
          value={content}
          placeholder="content"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
