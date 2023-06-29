/* eslint-disable prettier/prettier */
import GetHeatherHistory from "components/Weather/GetWeatherHistory";
import React from "react";
import SearchWeather from "./SearchWeather";
import "./weather.css"

const Weather = () => (
    <>
        <h1>Weather Search and Data</h1>
        <hr />
        <h3>Enter a list of cities (comma separated) and see weather statistics about them:</h3>

        <SearchWeather />

        <h3>Last 10 searches:</h3>

        <GetHeatherHistory />
    </>
)

export default Weather;