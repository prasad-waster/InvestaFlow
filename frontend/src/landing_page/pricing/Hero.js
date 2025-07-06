import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 mb-5 border-bottom">
          <h1 className="fs-2 text-center ">Pricing</h1>
          <h3 className="text-muted fs-4 mt-3 text-center ">
            List of all charges and taxes
          </h3>
        </div>
        <div className="row p-5 mt-5">
          <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" />
            <h1 className="fs-3" style={{ color: "#424242" }}>
              Free equity delivery
            </h1>
            <p className="mt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/intradayTrades.svg" />
            <h1 className="fs-3 " style={{ color: "#424242" }}>
              Intraday and F&O trades
            </h1>
            <p className="mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="media/images/pricingEquity.svg" />
            <h1 className="fs-3" style={{ color: "#424242" }}>
              Free direct MF
            </h1>
            <p className="mt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
