import React from "react";
import "../Styles/Awards.css"; // Add styles here

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Text content */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="awards-heading mb-3">Largest Stock Broker In India</h1>
          <p className="mb-4 awards-subtext">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="awards-list">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="awards-list">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
