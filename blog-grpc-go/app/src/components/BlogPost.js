import React, { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectBlog, readBlogAsync } from "../redux/blog/blogSlice";
import { login } from "../methods/auth";

const BlogPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBlogAsync(id));
  }, []);

  const state = useSelector(selectBlog);
  //   console.log(state);

  const history = useHistory();
  const location = useLocation();
  const handleClick = () => {
    // console.log(location);
    history.push(`${location.pathname}/edit`);
  };
  return (
    <div>
      <h1>TITLE:{state.title}</h1>
      <a>author: {state.author}</a>
      <p>{state.content}</p>
      <h3>{id}</h3>
      <i onClick={() => handleClick(state)}>update blog</i>
    </div>
  );
};
export default BlogPost;
