import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-3">
        <h1 style={{ color: "#424242" }}>InvestaFlow Products</h1>
        <h2 className="fs-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
