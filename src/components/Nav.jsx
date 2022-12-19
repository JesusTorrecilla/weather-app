import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <>
      <nav className="navbar navbar-dark ">
        <a className="navbar-brand" href="#">
          <img
            style={{ marginRight: "5%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-weather.svg/1024px-Circle-icons-weather.svg.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          <span class="letter">Weather App</span>
        </a>
        <SearchBar onSearch={onSearch} />
      </nav>
    </>
  );
}

export default Nav;
