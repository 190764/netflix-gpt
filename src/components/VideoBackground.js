import React, { useEffect, useState } from 'react'


const VideoBackground = ({movieId}) => {
  const [trailerId,setTrailerId]=useState(null);

  const getMovieVideos= async()=>{
   const data=await fetch("https://api.themoviedb.org/3/movie/573435/videos?api_key=57b9d7f9613cc5fab7bc2d6956d4a077");
   const json=await data.json();
   console.log(json);

   const filterData =json.results.filter((video)=>video.type==="Trailer");
   const trailer=filterData.length? filterData[0]: json.results[0];
   console.log(trailer);
   setTrailerId(trailer.key);
  };
  useEffect(()=>{
    getMovieVideos();
  },[]);

  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}title="YouTube video player"  allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
    </div>
  )
}

export default VideoBackground