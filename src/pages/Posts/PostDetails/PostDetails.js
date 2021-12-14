function PostDetails({ selectedPost }) {
  console.log(selectedPost);

  return (
    <div className="PostDetails">
      <h4>
        <span>{selectedPost.id}</span> Post Details
      </h4>
      <h6 style={{ color: "red" }}>{selectedPost.title}</h6>

      <h6>{selectedPost.body}</h6>
    </div>
  );
}

export default PostDetails;
