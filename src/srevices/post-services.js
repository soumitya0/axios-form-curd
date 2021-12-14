import axios from "axios";

export const getPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = (ID) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
    .then((res) => {
      return res.data;
    });
};

export const createPost = (post) => {
  let title = post.title;
  let body = post.body;
  return axios
    .post(`https://jsonplaceholder.typicode.com/posts`, { title, body })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      return res.data;
    });
};

export const deletePost = (ID) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${ID}`)
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const updatePost = (post, id) => {
  return axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: post.title,
      body: post.body,
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};
