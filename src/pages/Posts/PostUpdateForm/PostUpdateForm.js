import { useEffect, useState } from "react";

function PostUpdateForm({ updatePostData }) {
  console.log(updatePostData);

  const [formData, setFormData] = useState({
    title: updatePostData.title,
    body: updatePostData.body,
  });

  console.log(formData, "hahaha");

  const handlerInput = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  return (
    <div>
      <h5>UpdateForm</h5>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handlerInput}
        />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={formData.body}
          onChange={handlerInput}
        />

        <button type="submit">UPdate</button>
      </form>
    </div>
  );
}

export default PostUpdateForm;

/** <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          //   onChange={handlerInput}
        />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={formData.body}
          //   onChange={handlerInput}
        />

        <button type="submit">UPdate</button>
      </form> */
