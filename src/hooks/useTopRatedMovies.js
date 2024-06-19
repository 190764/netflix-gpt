import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies=()=>{
//Fetch data from TMDB api and update store
const dispatch=useDispatch();

const getTopRatedMovies=async ()=>{
  const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=57b9d7f9613cc5fab7bc2d6956d4a077");
  const json=await data.json();
  // console.log(json.results);
  dispatch(addTopRatedMovies(json.results));
};

useEffect(()=>{
getTopRatedMovies();
},[]);
};

export default useTopRatedMovies;