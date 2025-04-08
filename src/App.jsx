import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!location) return;

    setLoading(true);
    setError('');
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setWeatherData(res.data);
    } catch (err) {
      console.error("Weather API Error:", err);

      const message =
        err.response?.data?.message ||
        err.message ||
        'Could not fetch weather data. Please check the city name.';

      setError(`Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-200 p-6 flex justify-center items-start">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center transition-all">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">🌤️ Weather Dashboard</h1>
        <SearchBar location={location} setLocation={setLocation} fetchWeather={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
