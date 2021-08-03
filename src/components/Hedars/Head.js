import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { navContext } from "../App";
import Logo from "../Logo/Logo";

const Head = () => {
  const { isLostFound } = useContext(navContext);
  const history = useHistory();
  return (
    <header className="header home-header" >
      <div className="header-row _container">
        <NavLink to="/" className="home-header logo-blue logo">
          <Logo />
        </NavLink>
        {isLostFound ? (
          <div className="header__buttons">
            <button
              className="header__button button red icon-search lost"
              onClick={() => {
                history.push("/lost/form/lost");
              }}
            >
              <span>I lost my pet</span>
            </button>
            <button className="header__button button blue icon-paw found" onClick={() => {
                history.push("/found/form/found");
              }}>
              <span>I found a pet</span>
            </button>
          </div>
        ) : (
          <button className="header__button button blue icon-plus">Add Post</button>
        )}
      </div>
    </header>
  );
};
export default Head;
