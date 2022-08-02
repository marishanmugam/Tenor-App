import React, { useState } from "react";
import "./featured.css";
import axios from "axios";
import { useEffect } from "react";

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [pos, setPos] = useState("");


  const featuredData = async () => {
    //this pos containing next array set inxex

    axios
      .get(
        `https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c`
      )
      .then((res) => {
  
        setFeatured(res.data.results);
        setPos(res.data.next);
      });
  };

  useEffect(() => {
    featuredData();

    window.addEventListener("scroll", ()=> {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&pos=${pos}`)
        .then((data) => {
          setFeatured([...featured, ...data.data.results] )
          console.log('Mari');
      
        })
      }
    });
  }, []);
  


  return (
    <div className="featured-container">
      <div className="featured-content">
        <h2>Featured GIFs</h2>

        <div className="image-container">
          <div className="coloum"></div>
          {featured.map((ev) => {
            return (
              <div className="images" key={ev.id}>
                <img src={ev.media_formats.gif.url}></img>
              </div>
            );
          })}

          
        </div>
      </div>
    </div>
  );
}

export default Featured;
