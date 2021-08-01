import React, { useContext, useEffect, useState } from "react";
import { navContext } from "../App";
import LostFoundLogo from "../Logo/LostFoundLogo";
import init from "../utilits/select";
import Select from "./Select";

const LostFoundForm = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const [isFound, setIsFound] = useState(true);
  const [_isFound, _setIsFound] = useState(true);
  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (!isLostFound) {
      setIsLostFound(true);
    }
    init();
  }, []);

  useEffect(() => {
    if (document.location.pathname.split("/").pop() === "lost") {
      setIsFound(false);
    } else {
      setIsFound(true);
    }
  }, [document.location.pathname.split("/").pop()]);

 

  return (
    <div className="home-page__container">
      <h2 className="home-page__title">
        {isFound
          ? "Found a pet? Please complete the form to help."
          : "Lost your buddy? Keep calm and complete the form."}
      </h2>
      <div className="home-page__row lost-page">
        <div className="lost-page__content">
          <form action="#" id="form" className="lost-page__form">
            <div className="lost-page__items">
              <div className="lost-page__item form__item">
                <label>Lost/Found</label>
                <Select isFound={_isFound} setIsFound={_setIsFound}/>
              </div>
              <div className="lost-page__item">
                <label>Nickname:</label>
                <input type="text" placeholder="Uncle Sam" />
              </div>
              <div className="lost-page__item">
                <label>Type:</label>
                <input type="text" placeholder="Dog" />
              </div>
              <div className="lost-page__item">
                <label>Sex:</label>
                <select className="form__select">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="lost-page__item">
                <label>Breed:</label>
                <input type="text" placeholder="Golden Retriever" />
              </div>
              <div className="lost-page__item">
                <label>Color:</label>
                <input type="text" placeholder="Beige" />
              </div>
              <div className="lost-page__item">
                <label>Height:</label>
                <select className="form__select">
                  <option>45-75 cm</option>
                  <option>75-100 cm</option>
                </select>
              </div>
            </div>
            <div className="lost-page__items items-img">
              <img src="../images/dist/lost-form-img.png" alt="dog-walking" />
            </div>
            <div className="lost-page__items">
              <div className="lost-page__item">
                <label>
                  Distinktive features:
                  <span>up to 60 char</span>
                </label>
                <textarea
                  rows="2"
                  placeholder="blue collar with stars, no left ear, damaged tail."
                ></textarea>
              </div>
              <div className="lost-page__item">
                <label>
                  Description:
                  <span>up to 150 char</span>
                </label>
                <textarea
                  rows="6"
                  placeholder="brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox"
                ></textarea>
              </div>
              <div className="lost-page__item">
                <label>Location:</label>
                <textarea
                  rows="2"
                  placeholder="Oliver Platz, Berlin"
                ></textarea>
              </div>
              <div className="lost-page__item">
                <label>Photo:</label>
                <input type="text" placeholder="site.com/my-photo.img" />
              </div>
            </div>
            <div className="lost-page__items">
              <div className="lost-page__item">
                <label>Contacts:</label>
                <div className="lost-page__item-container">
                  <input type="tel" placeholder="Phone*" required />
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="lost-page__item">
                <button className="button blue icon-paw">
                  <span className="text">Publish</span>
                  <LostFoundLogo />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LostFoundForm;
