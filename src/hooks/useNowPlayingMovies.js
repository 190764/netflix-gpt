import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
//Fetch data from TMDB api and update store
const dispatch=useDispatch();

const getNowPlayingMovies=async ()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=57b9d7f9613cc5fab7bc2d6956d4a077");
  const json=await data.json();
  console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(()=>{
getNowPlayingMovies();
},[]);
};

export default useNowPlayingMovies;