import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import da from "../utilits/dynamic_adapt";
// import { useHistory } from "react-router-dom";

const HomeMain = () => {
  useEffect(() => {
    da.init();
  }, []);
  return (
    <>
      <main className="page">
        <section className="welcome">
          <div className="welcome__row">
            <div className="welcome__content">
              <h1 className="welcome__title">
                Welcome to your <span>pawfessional</span> community
              </h1>
              <NavLink
                to="/found"
                className="welcome__button button-lost"
              >
                <div className="welcome__button-container">
                  <p className="content-top">I lost my pet!</p>
                  <p className="content-bottom">Click to find!</p>
                </div>
                <div className="welcome__logo">
                  <img src="https://propets.space/images/dist/logo.png" alt="" />
                </div>
              </NavLink>
              <NavLink
                to="/lost"
                className="welcome__button button-pet"
                data-micromodal-open
              >
                <div className="welcome__button-container">
                  <p className="content-top">I found a pet!</p>
                  <p className="content-bottom">What to do?</p>
                </div>
              </NavLink>
            </div>
            <div
              className="welcome__img-container"
              data-da=".welcome__content,768.98,1"
            >
              <div className="welcome__img">
                <img src="https://propets.space/images/dist/home.png" alt="Welcome" />
              </div>
            </div>
          </div>
          <div className="welcome__info-link info-link">
            I’m okay, just want to <NavLink to="/sign_in">join</NavLink> the
            pawsome community!
          </div>
        </section>
        <section className="banner">
          <div className="banner__row banner__container">
            Our fluffy space for lovers, admirers, dads and moms of our
            four-legged, winged, tailed guys.
          </div>
        </section>
        <section className="block-info">
          <div className="block-info__row _container">
            <div className="block-info__column">
              <div className="block-info__img">
                <img src="https://propets.space/images/dist/home-2.png" alt="" />
              </div>
              <div className="block-info__content">
                <h3 className="block-info__title">
                  Here is collected everything that your pet needs:
                </h3>
                <ul className="block-info__list">
                  <li>professional veterinarian tips;</li>
                  <li>useful information about education and care;</li>
                  <li>information about pet-sitting and walking service;</li>
                  <li>
                    and of course, great communication with new friends in your
                    social network!
                  </li>
                </ul>
                <div className="block-info__info-link info-link">
                  Make an account and <NavLink to="/sign_in">join</NavLink> to
                  us!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <div className="modal micromodal-slide" id="modal-1" aria-hidden="true">
        <div className="modal__overlay" tabindex="-1" data-micromodal-close>
          <div
            className="modal__container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-1-title"
          >
            <div className="modal__header">
              <h2 className="modal__title" id="modal-1-title"></h2>
              <button
                className="modal__close"
                aria-label="Close modal"
                data-micromodal-close
              ></button>
            </div>
            <div className="modal__img">
              <img src="./images/dist/document.png" alt="" />
            </div>
            <div className="modal__footer">
              <NavLink href="" className="button modal-button open" target="_blank">
                <span>Открыть</span>
                <i className="far fa-folder-open"></i>
              </NavLink>

              <NavLink href="" download="" className="button modal-button download">
                <span>Скачать</span>
                <i className="fas fa-download"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div> */}
      <footer className="footer">
        <div className="footer__row _container">
          <div className="footer__logo logo">
            <img src="https://propets.space/images/dist/Group%201@2x.png" alt="propets.space" />
          </div>
          <div className="footer__address">
            1600 Amphitheatre Pkwy Mountain View, CA 94043, USA
          </div>
        </div>
      </footer>
    </>
  );
};
export default HomeMain;
