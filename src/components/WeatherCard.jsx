import React from 'react';
import PropTypes from 'prop-types';
import './WeatherAnimations.css'; 

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const condition = weather[0].main;

  return (
    <div
      className="relative max-w-md mx-auto mt-8 p-6 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md shadow-lg text-gray-800 overflow-hidden"
    >
      
      {condition === 'Clear' && <div className="sun-animation" />}
      {condition === 'Rain' && (
        <>
          <div className="raindrop drop1" />
          <div className="raindrop drop2" />
          <div className="raindrop drop3" />
        </>
      )}
      {condition === 'Clouds' && <div className="cloud-float" />}
      {condition === 'Thunderstorm' && <div className="lightning-flash" />}

      <h2 className="text-3xl font-semibold mb-2 text-center relative">{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto w-24 h-24 relative"
      />
      <p className="text-4xl font-bold text-center relative">{Math.round(main.temp)}°C</p>
      <p className="text-center text-gray-600 capitalize relative">{weather[0].description}</p>

      <div className="mt-5 text-center space-y-2 text-gray-700 text-sm relative">
        <p>💧 <span className="font-medium">Humidity:</span> {main.humidity}%</p>
        <p>💨 <span className="font-medium">Wind:</span> {wind.speed} km/h</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string,
        main: PropTypes.string,
      })
    ).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;
