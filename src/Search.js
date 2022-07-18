import React from "react";
import "./search.css";
import whiteLogo from "./images/tenor-logo-white.svg";
import { useState, useEffect } from "react";
import searchlogo from "./images/search.svg";

function Search() {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 25) 
      setFix(true);
      else setFix(false);
    };

    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <div className="main-search">
      <div className="searh-contianer" style={{ marginTop: fix ? -37 : 0 }}>
        <div className="search-box">
          <img src={whiteLogo} />
          <input
            placeholder="Search for GIFs and Stickers"
            type="text"
            className="text-box"
            style={{ width: fix ? "53%" : "58%", marginLeft: fix ? 72 : 0 }}
          ></input>
          <div className="search-logo">
            <img src={searchlogo}></img>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Search;
