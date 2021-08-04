import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addComment, addLike, getPostsById } from "../../store/action/posts";
import { defPhoto } from "../../store/url";
import { navContext } from "../App";
import AddComment from "../Form/AddComment";
import CommentCard from "./CommentCard";
import IsLike from "./IsLike";

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.postById);
  const dispatch = useDispatch();
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);

    const submitHandle = (event,data) => {
      event.preventDefault();
      dispatch(addComment(data));
      dispatch(getPostsById(id));
    };

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
    dispatch(getPostsById(id));
  }, []);

  return post.id ? (
    <div className="home-page__container home-content">
      <div className="home-page__row">
        <article className="posts__cards posts services-cards _show-more">
          <div className="pet-avatar">
            <div className="posts__avatar pet-avatar__img">
              <img src={post.User.photo || defPhoto} alt="Pet avatar" />
            </div>
            <div className="pet-avatar__name">
              {post.User.nick || post.User.fullName}
            </div>
            <div className="pet-avatar__date">{post.createdAt}</div>
          </div>
          <div className="posts__card-img">
            <img src={post.photo || null} alt="" />
          </div>
          <div className="posts__text services-cards__text">
            <h3 className="posts__title">{post.title}</h3>
            <p>{post.text}</p>
          </div>

          <div className="posts__card-details card-details">
            <NavLink
              to="/home"
              className="card-details__link services-cards__details icon-chevron-double"
              data-open="Close"
              data-close="...view details"
              title="details"
            ></NavLink>
          </div>
          <IsLike id={post.id} like={post.like} key={post.id} />
          <div className="posts__card-comments card-comments">
            <h3 className="card-comments__title">Comments</h3>
            {post.Comments.map((com) => (
              <CommentCard key={com.id} comment={com} />
            ))}
            <AddComment id={id} submitHandle={submitHandle} />
          </div>
        </article>
      </div>
    </div>
  ) : null;
};
export default Post;
