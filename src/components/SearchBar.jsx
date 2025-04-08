import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ location, setLocation, fetchWeather }) => {
  // Trigger search on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="flex justify-center my-8">
      <div className="relative mx-auto bg-[linear-gradient(135deg,_rgb(179,208,253)_0%,_rgb(164,202,248)_100%)] 
                      rounded-full p-[1px] grid place-content-center z-0 max-w-[300px]">
        <div className="relative w-full rounded-[50px] 
                        bg-[linear-gradient(135deg,_rgb(218,232,247)_0%,_rgb(214,229,247)_100%)] 
                        p-[5px] flex items-center">

          
          <div className="absolute top-[-1px] left-[-1px] w-full h-full rounded-[50px] 
                          bg-[linear-gradient(0deg,_rgb(218,232,247)_0%,_rgb(255,255,255)_100%)] 
                          z-[-1]" />

          
          <div className="absolute bottom-[-1px] right-[-1px] w-full h-full rounded-[50px] 
                          bg-[linear-gradient(0deg,_rgb(163,206,255)_0%,_rgb(211,232,255)_100%)] 
                          shadow-[3px_3px_5px_0px_rgba(79,156,232,0.7),_5px_5px_20px_0px_rgba(79,156,232,0.7)] 
                          z-[-2]" />

          
          <div className="flex items-center pl-3 mr-2 border-l-[2px] border-l-solid border-l-white">
            <svg
              className="w-8 h-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.293l5.414 5.414a1 1 0 001.414-1.414l-5.414-5.414A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </div>

          
          <input
            type="text"
            className="p-[10px] w-full bg-[linear-gradient(135deg,_rgb(218,232,247)_0%,_rgb(214,229,247)_100%)] 
                       border-0 text-[#9EBCD9] text-[20px] rounded-[50px] focus:outline-none 
                       focus:bg-[linear-gradient(135deg,_rgb(239,247,255)_0%,_rgb(214,229,247)_100%)]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search a city"
          />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
};

export default SearchBar;
