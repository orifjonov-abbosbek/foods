import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mySvg from "../../assets/foods.svg";
import '../Header/header.css'
import { Link } from "react-router-dom";
const header = () => {

  return (
    <>
      <div className="header ">
        <div className="container">
          <div className="wrapper">
            <a href="">
                <img src={mySvg} alt="" />
            </a>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-list-item">
                  <Link className="nav-item-link" to='/'>
                    Home
                  </Link>
                </li>
                <li className="nav-list-item">
                  <Link className="nav-item-link" to='/all'>
                    All
                  </Link>
                </li>
                <li className="nav-list-item">
                  <Link className="nav-item-link" to='/categories'>
                    Categories
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
