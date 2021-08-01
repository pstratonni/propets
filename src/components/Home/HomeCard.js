import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeCard=()=>{
    return(<article className="posts__cards posts services-cards">
    <div className="pet-avatar">
      <div className="posts__avatar pet-avatar__img">
        <img
          src="../images/dist/lost-pets/john-goodboy.png"
          alt="Pet avatar"
        />
      </div>
      <div className="pet-avatar__name">John Goodboy</div>
      <div className="pet-avatar__date">6 April, 10:15</div>
    </div>
    <div className="posts__text services-cards__text">
      <h3 className="posts__title">
        The quick, brown fox jumps over NavLink lazy dog.
      </h3>
    </div>
    <div className="posts__card-details card-details">
      <NavLink
        to=""
        className="card-details__link services-cards__details icon-chevron-double"
        data-open="Close"
        data-close="...view details"
        title="details"
      ></NavLink>
    </div>
    <div className="posts__card-details-like">
      <span className="icon-thumbs-up">176</span>
    </div>
  </article>)
}
export default HomeCard