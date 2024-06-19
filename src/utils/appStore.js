import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import configReducer from "./configSlice"

const appStore=configureStore(
  {
    reducer:{
      user:useReducer,
      movies:moviesReducer,
      config:configReducer
    },
  }
);

export default appStore;



