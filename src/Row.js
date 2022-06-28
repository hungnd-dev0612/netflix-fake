import React, { useState, useEffect } from 'react'
import instance from './axios'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  // const [trailer]
  const imgUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      // console.log(request);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
    
  }, [fetchUrl])
  console.log(movie);
  function showTrailerMovie(movie) {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      console.log(movie);
      movieTrailer(movie?.name || movie?.title || "")
      .then(response => {
        console.log(response);
        console.log(movie?.name);
        console.log(movie?.id);
        console.log(movieTrailer);
        if(response==null){
          
        }
        const url = new URL(response);
        const params = new URLSearchParams(url.search);
        const videoId = params.get('v');
        console.log(url);
        setTrailerUrl(videoId);
      }).catch(error => {
        console.log(error);
      })
    }
  }
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    }
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movie?.map((movie) =>
        
          <img
            key={movie.id}
            onClick={() => showTrailerMovie(movie)}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
            src={`${imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        )}
      </div>

      {/* 
      Tai sao phai co dau ? ngay movie
      The variable you are trying to map over is undefined. 
      It will probably eventually be an array, but due to the asynchronous nature of React, 
      you are experiencing at least one render when the variable is undefined
      https://typeofnan.dev/fix-cannot-read-property-map-of-undefined-error-in-react/
       */}
      {/* 
       https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=b2d481c2caed575d6a15b45f6080a677&language=en-US 
       http://api.themoviedb.org/3/movie/157336/videos?api_key=###
       */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div >

  )
}

export default Row