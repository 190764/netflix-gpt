import React from 'react'
import { Play } from "lucide-react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-5xl font-bold'>
        {title}</h1>
        <p className='py-6 text-s w-1/4'>{overview}</p>
        <div className=''>
          <button className='bg-white text-black p-2 px-5 mx-2 text-xl  rounded-lg hover:bg-opacity-80 '>
          <Play fill='black' className='inline mb-1' />Play </button>
          <button className='px-4 md:hover:scale-95 py-1 md:px-8 md:py-2 rounded-md bg-gray-500 text-white bg-opacity-50 font-semibold text-xl'>
              <Info className='inline mb-1 ' /> Info
            </button>
        </div>
      </div>
  );
};

export default VideoTitle;