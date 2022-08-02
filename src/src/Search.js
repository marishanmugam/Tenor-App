import React from "react";
import "./search.css";
import whiteLogo from "./images/tenor-logo-white.svg";
import { useState, useEffect } from "react";
import searchlogo from "./images/search.svg";
import axios from "axios";

function Search() {
  const [fix, setFix] = useState(false);
  const [sear,setSear] = useState([]);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 25) 
      setFix(true);
      else setFix(false);
    };

    window.addEventListener("scroll", setFixed);


    
  }, []);
  const onType = async (val) => {
    const search = val.target.value;
    console.log(search)
    axios
    .get(`https://tenor.googleapis.com/v2/search?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&q=${search}`)
    .then((res) => {
      setSear(res.data.results);
    })
  

  }
  return (
    <div className="main-search">
      <div className="searh-contianer" style={{ marginTop: fix ? -37 : 0 }}>
        <div className="search-box">
          <img src={whiteLogo} />
          <input
            placeholder="Search for GIFs and Stickers"
            type="text"
           onSubmit={onType}
            className="text-box"
            style={{ width: fix ? "53%" : "58%", marginLeft: fix ? 72 : 0 }}
          ></input>
          <div className="search-logo">
            <img src={searchlogo}></img>
          </div>
        </div>
      </div>

      <div className="image-container">
          <div className="coloum" ></div>
          {sear.map((e,index) => {
            return (
              <div  className="images" key={e.id}> 
                <img src={e.media_formats.gif.url} key={index.id} target="_blank"></img>
              </div>
            );
          })}
        </div>
    </div>
  );  
}

export default Search;
