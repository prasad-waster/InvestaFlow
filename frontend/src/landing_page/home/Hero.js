import React from "react";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero section "
          className="mb-5"
        />
        <h1 className="mt-3">Invest In Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          href="/login"
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Hero;
