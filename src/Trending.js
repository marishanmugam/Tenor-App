import React, { useState, useEffect } from "react";
import "./trending.css";
import axios from "axios";
import Search from "./Search";

function Trending() {
  const [featured, setFeatured] = useState("[]");
  const [ser, setSer] = useState([]);
  const [data, setdata] = useState([]);
  const [trend, setTrend] = useState([]);
  const [index, setIndex] = useState(0);

  var noOfSlide = ser.length;
  console.log(noOfSlide);

  const fetchData = () => {
    axios
      .get(
        "https://tenor.googleapis.com/v2/trending_terms?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c"
      )
      .then((res) => {
        setFeatured(res.data.results);
      });
  };
  // console.log(featured);

  // const arr = [];
  // featured.forEach((data,id) => {
  //     <div key={id}>
  //     arr.push({data});</div>
  // });

  // console.log(arr)

  const searchData = () => {
    axios
      .get(
        `https://tenor.googleapis.com/v2/search?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&q=${featured}`
      )

      .then((res1) => {
        setSer(res1.data.results);
      });
  };
  console.log(ser);
  useEffect(() => {
    fetchData();
    searchData();
  }, []);

  const prev = () => {
    console.log("pre Clicked");
  };

  const next = () => {
    console.log("next Clicked");
  };

  return (
    <div className="trending-main">
      <div className="prev">
        <span id="prev" onClick={prev}>
          &#10094;
        </span>
      </div>
      <div id="next" className="next">
        <span id="next" onClick={next}>
          &#10095;
        </span>
      </div>
      <div className="trending-container">
        <h2> Trending Tenor Searches</h2>
      </div>
      <div className="trend-container">
        <span></span>
        {ser.map((e) => {
          return (
            <div className="trend-images" key={e.id}>
              <div className="trend">
                <a href="#">
                  {" "}
                  <img src={e.media_formats.gif.url}></img>{" "}
                </a>
              </div>
            </div>
          );
        })}
        <span>{trend}</span>

       
      </div>
    </div>
  );
}

export default Trending;
