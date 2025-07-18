import React from "react";
import "../Styles/Pricing.css";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2 text-center text-md-start">
            Unbeatable Pricing
          </h1>
          <p className="text-muted text-center text-md-start">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="text-center text-md-start">
            <a href="#" className="pricing-link">
              See pricing <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-md-6 p-4 border mb-3 mb-md-0">
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual fund</p>
            </div>
            <div className="col-12 col-md-6 p-4 border">
              <h1>₹20</h1>
              <p>Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
