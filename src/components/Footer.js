import React,{useState} from 'react';
import { MagnifyingGlassIcon,ArrowPathRoundedSquareIcon,
  BackwardIcon,
  PlayIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  HomeIcon,
  ListBulletIcon,
  Square3Stack3DIcon } from '@heroicons/react/24/solid';
  

   
  function Footer(){

    const [isPlaying, setIsPlaying] = useState(false);

    
        const handlePlayPause = () => {
            setIsPlaying(!isPlaying);
            console.log(isPlaying);
          };
       
  

    return(
        <footer className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] p-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Track Info */}
          <div className="flex items-center w-1/4">
            <img
              src="path/to/album-cover.jpg"
              alt="Album Cover"
              className="h-14 w-14 rounded"
            />
            <div className="ml-4">
              <p className="text-sm">Song Name</p>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center w-1/2">
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white">
              <img src ="Spotify_Icons\Repeat.svg" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <img src ="Spotify_Icons\Previous.svg" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white" onClick={handlePlayPause}>
              <img src ={isPlaying ? "Spotify_Icons//Pause.svg" : "Spotify_Icons//Play.svg"} className="h-10 w-10 text-black" />
              </button>
              <button className="text-gray-400 hover:text-white">
              <img src ="Spotify_Icons\Next.svg"className="h-5 w-5" />
              </button>
            </div>
            
            {/* Timeline */}
            <div className="w-full flex items-center space-x-4 mt-2">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center w-1/4 justify-end">
          <button className="text-gray-400 p-2 hover:text-white">
              <img src ="Spotify_Icons\Lyrics.svg" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 p-2 hover:text-white">
              <img src ="Spotify_Icons\Queue.svg" className="h-5 w-5" />
              </button>
              <button className="text-gray-400 p-2 hover:text-white">
              <img src ="Spotify_Icons\Connect to a device.svg" className="h-5 w-5" />
              </button>
          <img src ="Spotify_Icons\Volume.svg" className="h-5 w-5 text-gray-400" />
            <div className="w-24 h-1 bg-gray-600 rounded-full ml-2">
              <div className="w-1/2 h-full bg-white rounded-full">
              </div>     
            </div>
            <button className="text-gray-400 p-2 hover:text-white">
              <img src ="Spotify_Icons\Full screen.svg" className="h-5 w-5" />
              </button>
          </div>
        </div>
      </footer>
    )
  }
  export default Footer;
