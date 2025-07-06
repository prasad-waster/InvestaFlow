import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/prasad.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Prasad Waster</h4>
          <h6>Full Stack Web Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I'm Prasad Waster, a full-stack developer currently building
            InvestaFlow — a modern trading platform to help traders make
            informed decisions with ease.
          </p>
          <p>
            I specialize in React, Node.js, and cloud-based technologies, and
            I'm passionate about creating seamless user experiences and scalable
            applications.
          </p>
          <p>
            Beyond coding, I love exploring AI, data analytics, and how
            technology can transform the future of finance.
          </p>
          <p>
            Connect with me on <a href="">Homepage</a> / <a href="">LinkedIn</a>{" "}
            / <a href="">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
