import React from "react";
import "../Styles/Hero.css";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero section"
            className="mb-4 img-fluid"
          />
          <h1 className="mt-3 hero-heading">Invest In Everything</h1>
          <p className="hero-subtext">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://investa-flow-home.vercel.app/signup")
            }
            className="btn btn-primary hero-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
