import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { navContext } from "../App";
import Logo from "../Logo/Logo";
import SignInButton from "../Main/SignInButton";
import HeadButton from "./HeadButton";

const Head = () => {
  const { isLostFound } = useContext(navContext);
  const history = useHistory();
  const tokenIsValid = useSelector((state) => state.users.tokenIsValid);

  return (
    <header className="header home-header">
      <div className="header-row _container">
        <NavLink to="/" className="home-header logo-blue logo">
          <Logo />
        </NavLink>
        {tokenIsValid?<HeadButton isLostFound={isLostFound}/>:<SignInButton />}
       
      </div>
    </header>
  );
};
export default Head;
