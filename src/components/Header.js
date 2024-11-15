import React from 'react';
import { MagnifyingGlassIcon,ArrowPathRoundedSquareIcon,
  BackwardIcon,
  PlayIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  HomeIcon,
  ListBulletIcon,
  Square3Stack3DIcon } from '@heroicons/react/24/solid';
  function Header(){
    return(
        <header className="bg-black fixed top-0 left-64 right-0 z-50 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <img 
            src="Images\Spotify_Primary_Logo_RGB_Green.png" 
            alt="Spotify" 
            className="h-8"
          />
          </h1>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="What do you want to play?"
                className="w-full py-2 pl-10 px-4 bg-[#242424] rounded-full text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">Sign Up</button>
            <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:scale-105">
              Log in
            </button>
          </div>
        </div>
      </header> 
    )
  }
  export default Header;