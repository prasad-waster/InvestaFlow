import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "75%" }} />
        </div>
        <div className="col-6">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="text-muted mt-3">
            Free and open market education Varsity, the largest online stock
            market education book in the world covering everything from the
            basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-muted mb-3 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
