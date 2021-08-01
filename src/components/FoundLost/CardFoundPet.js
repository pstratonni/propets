import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CardFoundPet = (type,location,photo) => {
  return (
    <article className="card">
      <div className="card__info-hover icon-map-marker">
        {location}
      </div>
      <span className="card__category found-category">Found</span>
      <div className="card__img"></div>
      <div
        className="card__img--hover"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      ></div>
      <div className="card__info">
        <h3 className="card__title">{type}</h3>
        <div className="card-details">
          <span>View </span>
          <NavLink
            to="/d"
            className="card-details__link icon-chevron-double"
            title="View details"
          >
            details
          </NavLink>
        </div>
      </div>
    </article>
  );
};
export default CardFoundPet;
