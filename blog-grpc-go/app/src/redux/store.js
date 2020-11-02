import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./blog/blogSlice";
import { blogListReducer } from "./blog/blogSlice";

export default configureStore({
  reducer: {
    blog: blogReducer,
    blogList: blogListReducer,
  },
});
