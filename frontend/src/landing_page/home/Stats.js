import React from "react";
import "../Styles/Stats.css";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 px-4 mb-5 mb-md-0">
          <h1 className="fs-2 mb-4 text-center text-md-start">
            Trust with confidence
          </h1>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust InvestaFlow with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">No spam and gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, or annoying notifications. High quality apps
              you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">The InvestaFlow Universe</h2>
            <p className="text-muted">
              Not just an app, but an ecosystem. Our investments in 30+ fintechs
              offer tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we help you do better
              with your money, not just transact.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-4 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
          />
          <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
            <a href="#" className="stats-link">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" className="stats-link">
              Try InvestaFlow <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
