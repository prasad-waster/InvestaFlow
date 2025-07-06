import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center mb-5">
            <div className="col p-4 border">
              <h1> &#8377; 0</h1>
              <p>Free equity delivery and direct mutual fund</p>
            </div>
            <div className="col p-4 border">
              <h1>&#8377; 20</h1>
              <p>Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
