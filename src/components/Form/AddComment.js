import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, getPostsById } from "../../store/action/posts";

const AddComment = ({ id,submitHandle }) => {
    const dispatch = useDispatch();
  const [isField, setIsField] = useState({
    postId: id,
    text: "",
  });

  const cangeField = (event) => {
    setIsField({ ...isField, [event.target.name]: event.target.value });
  };



  return (
    <form className="card-comments__form" onSubmit={(event)=>submitHandle(event,isField)}>
      <div className="card-comments__item">
        <input
          type="text"
          placeholder="type your comment"
          name="text"
          onChange={cangeField}
          required
        />
      </div>
      <div className="card-comments__item">
        <button className="icon-comments" type="submit">
          add comments
        </button>
      </div>
    </form>
  );
};
export default AddComment;
