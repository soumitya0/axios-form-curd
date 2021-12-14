import { useEffect, useState, useHis } from "react";
import { withRouter } from "react-router-dom";
import { getPost, createPost, deletePost } from "../../srevices/post-services";
import PostDetails from "./PostDetails/PostDetails";
import PostUpdateForm from "./PostUpdateForm/PostUpdateForm";
import SinglePost from "./SinglePost/SinglePost";

const INITIAL_POST_DETAILS = {
  body: "",
  title: "",
};

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [addPosts, setAddPosts] = useState(INITIAL_POST_DETAILS);
  const [selectedPost, setSelectedPost] = useState(null);

  const [updatePostData, setupdatePostData] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    let response = await getPost();
    setPosts(response.data);
  };

  console.log(posts);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <SinglePost key={post.id}>
          <div className="singlePost" onClick={() => setSelectedPost(post)}>
            <h4>
              <span>{post.id}</span>
              <br />
              {post.title}
            </h4>
          </div>
          <button onClick={() => setupdatePostData(post)}>EDIT</button>
          <button onClick={() => onDeletePost(selectedPost.id)}>DELETE</button>
        </SinglePost>
      );
    });
  };

  const selectChildPost = (post) => {
    props.history.push(`/posts/${post.id}`);
  };

  const handlerInput = (e) => {
    setAddPosts({ ...addPosts, [e.target.name]: e.target.value });
  };

  // CREATE
  const onAddPost = async (post) => {
    let response = await createPost(post);
    setPosts((post) => {
      return [...post, response];
    });
  };

  // Delete Post
  const onDeletePost = async (id) => {
    console.log(id);

    let response = await deletePost(id);
    console.log(response);
    if (response.status !== 200) {
      return;
    } else {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPost(addPosts);
  };

  console.log(addPosts);

  return (
    <div className="posts">
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={addPosts.title}
          onChange={handlerInput}
        />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={addPosts.body}
          onChange={handlerInput}
        />

        <button type="submit">Add</button>
      </form>
      <div className="posts__Grid">
        <div className="">{renderPosts()}</div>

        <div>
          {posts.map((post) => (
            <SinglePost key={post.id}>
              <div
                className="singlePost"
                style={{ border: "1px solid red" }}
                onClick={() => selectChildPost(post)}
              >
                <h4>
                  <span>{post.id}</span>
                  <br />
                  {post.title}
                </h4>
              </div>
            </SinglePost>
          ))}
        </div>

        <div>{selectedPost && <PostDetails selectedPost={selectedPost} />}</div>

        <div>
          {updatePostData && <PostUpdateForm updatePostData={updatePostData} />}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Posts);
