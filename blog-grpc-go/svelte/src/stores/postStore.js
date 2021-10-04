import { writable } from "svelte/store";
import { ListBlog, ListBlogForUser, ReadBlog, CreateBlog } from "../methods/blog";

//GET all the postByUserID
const postdetail = {}

//CREATE  a post
export const createPost = async (title, content) => {
  try {
    const response = await CreateBlog(title, content)
    var obj = {
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };

    //update the existing list of posts -
    //if the response is true
    //update the ui, by updating the postlist
    if (response) {
      let list = []
      postlist.subscribe((value) => {
        list = [...value, obj]
      })
      postlist.set([...list])
    }
  } catch (error) {
    console.log(error)
  }
}


//GET postById
const postDetail = {}
export const fetchPost = async (id) => {
  if (postDetail[id]) return postDetail[id];
  try {
    const response = await ReadBlog(id);
    const data = await {
      id: response.getBlog().getId(),
      authorId: response.getBlog().getAuthorId(),
      firstName: response.getBlog().getFirstName(),
      lastName: response.getBlog().getLastName(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };
    return data
  } catch (error) {
    console.log(error);
  }
}
export const postListByUser = writable([])
export const fetchAllPostForUser = async (userId) => {
  if (postdetail[userId]) return postdetail[userId]
  try {
    const arr = []
    const stream = await ListBlogForUser(userId);
    stream.on("data", (response) => {
      var obj = {
        id: response.getBlog().getId(),
        author: response.getBlog().getAuthorId(),
        title: response.getBlog().getTitle(),
        content: response.getBlog().getContent(),
      };
      arr.push(obj);
    });
    stream.on("end", () => {
      postListByUser.set(arr)
    });

  } catch (error) {
    console.log(error)
  }

}


//GET all the posts
export const postlist = writable([])
export const fetchAllPost = async () => {
  const arr = []
  const stream = await ListBlog();
  stream.on("data", (response) => {
    var obj = {
      id: response.getBlog().getId(),
      authorId: response.getBlog().getAuthorId(),
      firstName: response.getBlog().getFirstName(),
      lastName: response.getBlog().getLastName(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };
    arr.push(obj);
  });
  stream.on("end", () => {
    postlist.set(arr)
  });
};
