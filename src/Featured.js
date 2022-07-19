import React, { useState } from "react";
import "./featured.css";
import axios from "axios";
import { useEffect } from "react";

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [nextPos, setNextPos] = useState('');
  const [loading,setLoading ] = useState(true)
  const [page,setPage] = useState(1)

 
  useEffect(() => {
   
    const featuredData = () => {
      let newData = [];
      axios
        .get(
          `https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c&pos=${nextPos}&limit=5`
        )
  
        .then((res) => {
          res.data.results.map((res) => newData.push(res));
          setFeatured((oldData) => [...oldData, ...newData]);
          setNextPos(res.data.next);
          setLoading(false);
        });
    };


    console.log('this is 1time runnind')
    const onScroll = (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
  
      if (scrollHeight - scrollTop <= clientHeight * 1) {
        featuredData();
        setPage(page+1)
        
      }
    };
    window.addEventListener('scroll', onScroll);
    featuredData();
  },[]);

 

  


  return (
    <div className="featured-container">
      <div className="featured-content">
        <h2>Featured GIFs</h2>

        <div className="image-container">
          <div className="coloum" ></div>
          {featured.map((e,index) => {
            return (
              <div  className="images" > 
                <img src={e.media_formats.gif.url} key={index.id}></img>
              </div>
            );
          })}
        </div>

       
      </div>
    </div>
  );
}

export default Featured;
