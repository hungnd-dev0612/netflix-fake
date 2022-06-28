import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Banner.css"
function Banner() {
  const [movie, setMovie] = useState();
  const imgUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b2d481c2caed575d6a15b45f6080a677&language=vi`)
        .then((response) => response)
        .catch((error) => error.message)
      const getRandomMovie = Math.floor(Math.random() * request.data.results.length - 1);
      const getMovie = request.data.results[getRandomMovie];
      setMovie(getMovie); 
      return request;
    }
    fetchData();
  }, [])
  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${imgUrl}${movie?.backdrop_path})`,
  }
  return (
    <header className="banner"
      style={divStyle}
    >

      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_title}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>

        </div>
        <div className="banner_description">{movie?.overview}</div>
      </div>
      <div className="banner--fadeBottom"></div>
      {/*  
     two logos
     title
     two button
     description
     background-image
   
      */}
    </header>
  )
}

export default Banner