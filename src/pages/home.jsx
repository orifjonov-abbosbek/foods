import React from "react";
import "./home.css";
const home = () => {
  return (
    <>
      <div className="container">
        <div className="home-wrapper">
          <div className="content">
            <h1 className="home-title">Give order for a table !!!</h1>
            <button
              className="home-contact mt-8"
              style={{ marginTop: "100px" }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
