import React from "react";
import "../Styles/Education.css"; // Optional: for styling enhancements

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "75%" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="text-muted mt-3">
            Free and open market education Varsity, the largest online stock
            market education book in the world covering everything from the
            basics to advanced trading.
          </p>
          <a href="#" className="edu-link">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-muted mb-3 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="edu-link">
            Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
