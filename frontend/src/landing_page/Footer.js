import React from "react";

function Footer() {
  const linkStyle = { textDecoration: "none" };

  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="InvestaFlow Logo"
              style={{ width: "50%" }}
            />
            <p className="mt-2">
              &copy; 2025, InvestaFlow Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            {[
              "About",
              "Product",
              "Pricing",
              "Referral Programme",
              "Careers",
              "InvestaFlow.tech",
              "Press & media",
              "InvestaFlow Care",
            ].map((item, idx) => (
              <div key={idx} className="mb-2">
                <a href="#" className="text-muted" style={linkStyle}>
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div className="col">
            <p>Support</p>
            {[
              "Contact",
              "Support Portal",
              "IF-connect blog",
              "List of charges",
              "Downloads and resources",
            ].map((item, idx) => (
              <div key={idx} className="mb-2">
                <a href="#" className="text-muted" style={linkStyle}>
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div className="col">
            <p>Account</p>
            {["Open an account", "Fund transfer", "60 day challenge"].map(
              (item, idx) => (
                <div key={idx} className="mb-2">
                  <a href="#" className="text-muted" style={linkStyle}>
                    {item}
                  </a>
                </div>
              )
            )}
          </div>

          <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
            <p>
              <strong>InvestaFlow Broking Ltd.</strong>: Member of NSE, BSE &
              MCX – SEBI Registration no.: INZ000031633. CDSL/NSDL: Depository
              services through InvestaFlow Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019. Commodity Trading through InvestaFlow Commodities
              Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.:
              INZ000038238.
            </p>
            <p>
              Registered Address: InvestaFlow Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints, please
              email <strong>complaints@InvestaFlow.com</strong>, and for DP
              related queries: <strong>dp@InvestaFlow.com</strong>.
            </p>
            <p>
              Please ensure you read the Risk Disclosure Document as prescribed
              by SEBI | ICF.
            </p>
            <p>
              <strong>SEBI SCORES Complaint Procedure:</strong> Register with
              SCORES. Mandatory details: Name, PAN, Address, Mobile, Email.
              Benefit: Effective communication and quick redressal.
            </p>
            <p>
              <strong>Attention Investors:</strong>
              <ul>
                <li>
                  Securities accepted as margin only via pledge system w.e.f Sep
                  01, 2020.
                </li>
                <li>
                  Update mobile/email to receive OTP for pledges directly from
                  depository.
                </li>
                <li>
                  Review your holdings via NSDL/CDSL monthly consolidated
                  statement.
                </li>
              </ul>
            </p>
            <p>
              Prevent unauthorized transactions. Stay informed via mobile/email
              directly from the exchange. KYC is mandatory and only once per
              SEBI intermediary.
            </p>
            <p>
              For IPOs, avoid cheques. Authorize your bank via application form.
              We don’t provide stock tips or trading advice. Report
              impersonators via support.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
