import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navContext } from "./App";

const NavBar = () => {

  return (	<aside className="home-page__sidebar-left">
  <nav className="home-page__navigation navigation">
    {/* <div className="menu-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div> */}
    <ul className="navigation__list">
      <li className="navigation__li">
        <NavLink to="/home" className="navigation__link icon-home">Home</NavLink>
      </li>
      <li className="navigation__li">
        <NavLink to="/lost" className="navigation__link icon-search">Lost</NavLink>
      </li>
      <li className="navigation__li">
        <NavLink to="/found" className="navigation__link icon-paw">Found</NavLink>
      </li>
    </ul>
  </nav>
  <nav className="home-page__navigation navigation nav-services">
    <div className="nav-services__title-container">
      <h4 className="nav-services__title">Services</h4>
    </div>
    <ul className="navigation__list">
      <li className="navigation__li">
        <NavLink to="/hotels" className="navigation__link icon-hotel">Hotels</NavLink>
      </li>
      <li className="navigation__li">
        <NavLink to="/walking" className="navigation__link icon-walking">Walking</NavLink>
      </li>
      <li className="navigation__li">
        <NavLink to="/fostering" className="navigation__link icon-dog">Fostering</NavLink>
      </li>
      <li className="navigation__li">
        <NavLink to="/vet_help" className="navigation__link icon-stethoscope">VetHelp</NavLink>
      </li>
    </ul>
  </nav>
</aside>);
};
export default NavBar;
