import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navContext } from "../App";

const LostPets = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (!isLostFound) {
      setIsLostFound(true);
    }
  });

  return (
    <div className="home-page__container">
      <h2 className="home-page__title">Lost pets</h2>
      <div className="home-page__info-link info-link">
        Would you like to publish NavLink post?{" "}
        <NavLink to="/sign_in">join</NavLink> to our community!
      </div>
      <div className="home-page__row cards">
        <article className="card">
          <div className="card__info-hover icon-map-marker">
            Oliver Platz, Berlin
          </div>
          <span className="card__category">Lost</span>
          <div className="card__img"></div>
          <div
            className="card__img--hover"
            style={{
              backgroundImage: `url(https://propets.space/prototype/images/dist/lost-pets/uncle-sam.png)`,
            }}
          ></div>
          <div className="card__info">
            <h3 className="card__title">Uncle Sam</h3>
            <div className="card-details">
              <span>View </span>
              <NavLink
                to="/loist/details"
                className="card-details__link icon-chevron-double"
                title="View details"
              >
                details
              </NavLink>
            </div>
          </div>
        </article>

        <article className="card ">
          <div className="card__info-hover icon-map-marker">
            Oliver Platz, Berlin
          </div>
          <span className="card__category">Lost</span>
          <div className="card__img"></div>
          <div
            className="card__img--hover"
            style={{
              backgroundImage: `url(https://propets.space/prototype/images/dist/lost-pets/janetta.png)`,
            }}
          ></div>
          <div className="card__info">
            <h3 className="card__title">Janetta</h3>
            <div className="card-details">
              <span>View </span>
              <NavLink
                to="/loist/details"
                className="card-details__link icon-chevron-double"
                title="View details"
              >
                details
              </NavLink>
            </div>
          </div>
        </article>

        <article className="card ">
          <div className="card__info-hover icon-map-marker">
            Schloss Str, Potsdam
          </div>
          <span className="card__category">Lost</span>
          <div className="card__img"></div>
          <div
            className="card__img--hover"
            style={{
              backgroundImage: `url(https://propets.space/prototype/images/dist/lost-pets/john-goodboy.png)`,
            }}
          ></div>
          <div className="card__info">
            <h3 className="card__title">John Goodboy</h3>
            <div className="card-details">
              <span>View </span>
              <NavLink
                to="/loist/details"
                className="card-details__link icon-chevron-double"
                title="View details"
              >
                details
              </NavLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default LostPets;
