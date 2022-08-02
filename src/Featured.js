import React, { useState } from "react";
import "./featured.css";
import axios from "axios";
import { useEffect } from "react";

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [pos, setPos] = useState("");
  const [state,setState] = useState(0);

  const featuredData = async () => {
    //this pos containing next array set inxex
    axios
      .get(
        `https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&pos=${pos}`
      )
      .then((res) => {
        setFeatured([...featured, ...res.data.results]);
        setPos(res.data.next);
      });
  };
  console.log(pos);
  console.log(featured);



  useEffect(() => {
    featuredData();

    // Whenever reach the bottom of the page the page request api data
    const onScroll = (eve) => {
      const { scrollHeight, scrollTop, clientHeight } =
        eve.target.scrollingElement;

      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      featuredData();
        console.log("bottom of the page");
        let data = 0;
        data += 1;
        setState(data)
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  // const [featured, setFeatured] = useState([]);
  // const [nextPos, setNextPos] = useState([]);
  // // const [newData,setNewData] = useState([]);
  // const featuredData = async () => {
  //   axios
  //     .get(
  //       `https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c`
  //     )

  //     .then((res) => {
  //       setFeatured(res.data.results)
  //       // setNextPos(res.data.next);
  //       console.log(nextPos);
  //     });
  // };

  // const fetchNext = async () => {
  //   // let newData = [];
  //   axios
  //     .get(
  //       `https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&pos=${nextPos}`
  //     )

  //     .then((res) => {
  //       // let resu = res.data.results.map((res) => newData.push(res));
  //       let resu = res.data.results;
  //       // setFeatured((featured) => [...featured , res.data.results] );
  //       // setFeatured(featured => featured.concat(resu));
  //       setFeatured(featured =>featured.concat(resu))
  //       setNextPos(res.data.next);
  //       console.log(nextPos);
  //     });
  // };

  // useEffect(() => {
  //   featuredData();
  // }, []);
  // console.log("this is 1time runnind");
  // const onScroll = (event) => {
  //   const { scrollHeight, scrollTop, clientHeight } =
  //     event.target.scrollingElement;

  //   if (scrollHeight - scrollTop <= clientHeight * 1) {
  //    fetchNext();
  //    console.log('bottm of the page');
  //     window.removeEventListener("scroll", onScroll);
  //   }
  // };

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

          {/* {newData.map((e, index) => {
            return (
              <div className="images" key={index.id}>
                <img src={e.media_formats.gif.url} key={index.id}></img>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Featured;
