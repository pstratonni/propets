import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { doSignOut, getUserById } from "../../store/action/user";
import SignInButton from "../Main/SignInButton";

const LogIn = () => {
  const id = 1;

  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const tokenIsValid = useSelector((state) => state.users.tokenIsValid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token && localStorage.userId) {
      dispatch(getUserById(localStorage.userId));
    }
  }, []);

  const logOut = () => {
    dispatch(doSignOut());
  };

  const renderCard = () => {
    return (
      <>
        <div
          className="user-card__info"
          onClick={() => {
            history.push(`/edit_profile/${id}`);
          }}
        >
          <div className="user-card__img">
            <img src="../images/dist/users/anna-smith.jpg" alt="" />
          </div>
          <div className="user-card__name">Anna</div>
          <div className="user-card__name">Smith</div>
        </div>
        <NavLink
          to="#"
          className="user-card__logout icon-sign-out-alt"
          onClick={() => logOut()}
        >
          Logout
        </NavLink>
      </>
    );
  };

  return (
    <aside className="home-page__sidebar-right">
      <div className="user-card">
        {tokenIsValid ? renderCard() : <SignInButton />}
      </div>
    </aside>
  );
};
export default LogIn;