import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-4 m-3">
        <div className="col-6 p-3" style={{ marginBottom: "30px" }}>
          <h1 className=" mb-5" style={{ fontSize: "25px" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="">Track account opening</a>
          <a className="ms-3" href="">
            Track segment activation
          </a>
          <br />
          <a href="">Intraday margins</a>
          <a className="ms-3" href="">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3 mt-3">
          <h1 className=" mb-4" style={{ fontSize: "20px" }}>
            Featured
          </h1>
          <ol>
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
