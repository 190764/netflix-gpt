import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies=()=>{
//Fetch data from TMDB api and update store
const dispatch=useDispatch();

const getUpcomingMovies=async ()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=57b9d7f9613cc5fab7bc2d6956d4a077");
  const json=await data.json();
  console.log(json.results);
  dispatch(addUpcomingMovies(json.results));
};

useEffect(()=>{
getUpcomingMovies();
},[]);
};

export default useUpcomingMovies;