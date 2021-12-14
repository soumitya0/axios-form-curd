import { useEffect, useState } from "react";
import { getPostById } from "../../../srevices/post-services";

function PostChild(props) {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    loadSelectedPost(id);
  });

  const loadSelectedPost = async (id) => {
    const post = await getPostById(id);
    setSelectedPost(post);
  };

  if (!selectedPost) {
    return null;
  }

  const { id, title, body } = selectedPost;

  return (
    <div>
      <h1>{id}</h1>

      <h4>{title}</h4>

      <h6>{body}</h6>
    </div>
  );
}
export default PostChild;
