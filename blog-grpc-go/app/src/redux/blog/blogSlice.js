import { createSlice } from "@reduxjs/toolkit";
import {
  CreateBlog,
  ReadBlog,
  list,
  listblog,
  wait,
  UpdateBlog,
} from "../../methods/blog";

export const blogListSlice = createSlice({
  name: "blogList",
  initialState: {
    blogs: [],
  },
  reducers: {
    listBlog: (state, action) => {
      state.blogs = [...action.payload];
    },
    updateList: (state, action) => {
      state.blogs.map((obj, i) => {
        console.log(obj.id, i);
        if (obj.id == action.payload.id) {
          state.blogs[i] = action.payload;
        }
        return;
      });
      state.blogs.push(action.payload);
    },
  },
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    title: "",
    author: "",
    content: "",
    blogs: [],
  },
  reducers: {
    createBlog: (state, action) => {
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.content = action.payload.content;
    },
    readBlog: (state, action) => {
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.content = action.payload.content;
    },
    updateBlog: (state, action) => {
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.content = action.payload.content;
    },
  },
});

export const { createBlog, readBlog, updateBlog } = blogSlice.actions;
export const { listBlog, updateList } = blogListSlice.actions;
// actions
export const createBlogAsync = (state, author, title, content) => async (
  dispatch
) => {
  console.log("createblog called");
  const res = await CreateBlog(author, title, content);
  const data = {
    id: res.getId(),
    author: res.getAuthorId(),
    title: res.getTitle(),
    content: res.getContent(),
  };
  // dispatch event
  dispatch(createBlog(data));
  dispatch(updateListAsync(data));
  // dispatch(readBlog(data));
};

export const readBlogAsync = (id) => async (dispatch) => {
  const response = await ReadBlog(id);
  var data = {
    id: response.getBlog().getId(),
    author: response.getBlog().getAuthorId(),
    title: response.getBlog().getTitle(),
    content: response.getBlog().getContent(),
  };

  // dispatch event
  dispatch(readBlog(data));
};

export const updateBlogAsync = (id, title, content) => async (dispatch) => {
  const response = await UpdateBlog(id, title, content);
  var data = {
    id: response.getBlog().getId(),
    author: response.getBlog().getAuthorId(),
    title: response.getBlog().getTitle(),
    content: response.getBlog().getContent(),
  };
  // dispatch event
  await dispatch(updateBlog(data));
  await dispatch(updateListAsync(data));
};

export const listBlogAsync = (string) => async (dispatch) => {
  const stream = await listblog();
  var arr = [];
  stream.on("data", (response) => {
    var obj = {
      id: response.getBlog().getId(),
      author: response.getBlog().getAuthorId(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };
    arr.push(obj);
  });
  stream.on("end", (end) => {
    dispatch(listBlog(arr));
  });
};
const updateListAsync = (data) => async (dispatch) => {
  await dispatch(updateList(data));
};

// export values;
export const selectBlog = (state) => state.blog;
export const selectBlogList = (state) => state.blogList;

// export default blogSlice.reducer;
const blogReducer = blogSlice.reducer;
const blogListReducer = blogListSlice.reducer;
export { blogReducer, blogListReducer };
