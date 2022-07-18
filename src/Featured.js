import React, { useState } from 'react'
import './featured.css'
import axios from 'axios'
import {useEffect} from 'react';


function Featured() {

    const [featured,setFeatured] = useState([]);

    const fetchData = () => {
        axios
        .get('https://tenor.googleapis.com/v2/featured?key=AIzaSyDTHKhc9ujnqiwS2M29T_p6cTVSq9N0a2c')
        .then((res) => {
            setFeatured(res.data.results);
            console.log(setFeatured)
        })
    } 

   

    useEffect(() => {
     fetchData();
    }, [])
    

  return (
    <div className='featured-container'>
        <div className='featured-content'>
          <h2>Featured GIFs</h2>
        </div>
        <div className='image-container'>


            {
                featured.map((e) =>{
                    return (
                        <div className='images' key={e.id}>
                        <img src={e.media_formats.gif.url}></img>
                        </div>
                    )
                   
                })
            }
            </div>

        

    </div>
  )
}

export default Featured