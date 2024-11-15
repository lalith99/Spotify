import React from 'react';
import { MagnifyingGlassIcon,ArrowPathRoundedSquareIcon,
  BackwardIcon,
  PlayIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  HomeIcon,
  ListBulletIcon,
  Square3Stack3DIcon } from '@heroicons/react/24/solid';
  
  function SideBar(){
    return(
        <div className="bg-black b-10 flex text-white min-h-screen">
        {/* Add sidebar */}
        <div className="fixed flex-col left-0 top-0 bottom-0 w-64 bg-black p-6">
          <div className="space-y-4">
            {/* Navigation buttons */}
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white w-full">
              <HomeIcon className="h-6 w-6" />
              <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white w-full">
              <ListBulletIcon className="h-6 w-6" />
              <span>Your Playlists</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white w-full">
              <Square3Stack3DIcon className="h-6 w-6" />
              <span>Your Albums</span>
            </button>
  
            {/* Divider */}
            <hr className="border-[#282828] m-4" />
  
            {/* Playlist list */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Playlist 1</p>
              <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Playlist 2</p>
              <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Playlist 3</p>
              <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Playlist 4</p>
            </div>
          </div>
        </div>
        </div>
    )
  }
  export default SideBar;

