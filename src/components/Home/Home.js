import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navContext } from "../App";
import HomeCard from "./HomeCard";

const Home = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
  });
  return (
    <div className="home-page__container home-content">
      <div className="home-page__row">
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
      </div>
    </div>
  );
};
export default Home;
