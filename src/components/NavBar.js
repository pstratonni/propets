import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navContext } from "./App";

const NavBar = () => {
  const { isChangeActinve, setIsChangeActive } = useContext(navContext);

  const changeActiv = () => {
    setIsChangeActive(!isChangeActinve);
  };

  useEffect(() => {
    let active = document.querySelector(".navigation__list .active");
    if (active) {
      active.parentElement.classList.add("_active");
    }
  }, []);

  useEffect(() => {
    let active = document.querySelector(".navigation__list .active");
    let lis = document.querySelectorAll(".navigation__list>li");
    for (let li of lis) {
      li.classList.remove("_active");
    }
    if (active) {
      active.parentElement.classList.add("_active");
    }
  }, [isChangeActinve]);

  return (
    <aside className="home-page__sidebar-left">
      <nav className="home-page__navigation navigation">
        <ul className="navigation__list" id="top">
          <li className="navigation__li">
            <NavLink
              to="/home"
              className="navigation__link icon-home"
              onClick={changeActiv}
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/lost"
              className="navigation__link icon-search"
              onClick={changeActiv}
            >
              Lost
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/found"
              className="navigation__link icon-paw"
              onClick={changeActiv}
            >
              Found
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="home-page__navigation navigation nav-services">
        <div className="nav-services__title-container">
          <h4 className="nav-services__title">Services</h4>
        </div>
        <ul className="navigation__list">
          <li className="navigation__li">
            <NavLink
              to="/hotels"
              className="navigation__link icon-hotel"
              onClick={changeActiv}
            >
              Hotels
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/walking"
              className="navigation__link icon-walking"
              onClick={changeActiv}
            >
              Walking
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/fostering"
              className="navigation__link icon-dog"
              onClick={changeActiv}
            >
              Fostering
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              to="/vet_help"
              className="navigation__link icon-stethoscope"
              onClick={changeActiv}
            >
              VetHelp
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default NavBar;
