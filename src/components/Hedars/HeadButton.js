import React from "react";
import { useHistory } from "react-router-dom";

const HeadButton = ({ isLostFound }) => {
  const history = useHistory();

  return isLostFound ? (
    <div className="header__buttons">
      <button
        className="header__button button red icon-search lost"
        onClick={() => {
          history.push("/lost/form/lost");
        }}
      >
        <span>I lost my pet</span>
      </button>
      <button
        className="header__button button blue icon-paw found"
        onClick={() => {
          history.push("/found/form/found");
        }}
      >
        <span>I found a pet</span>
      </button>
    </div>
  ) : (
    <button
      className="header__button button blue icon-plus"
      onClick={() => history.push("/home/add_post")}
    >
      Add Post
    </button>
  );
};
export default HeadButton;
