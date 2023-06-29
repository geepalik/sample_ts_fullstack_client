/* eslint-disable prettier/prettier */
import React from "react";
import IWeatherSearchResultsData from "src/types/WeatherData/WeatherSearchResultsData";

const WeatherResults = ({weatherResults}) => {

    const listWeatherResults = (weatherResults: IWeatherSearchResultsData) => (
        weatherResults.searchData.map((weatherData, index) => (
            <div className="row" key={index}>
                <div className="cell">{weatherData.city}</div>
                <div className="cell">{weatherData.temperature}, {weatherData.wind}, {weatherData.description}</div>
            </div>
        ))
    )
    
    return (
        <div className="table">
            {weatherResults.searchData.length > 0 && (
                <div className="row">
                    <div className="cell">City</div>
                    <div className="cell">Weather</div>
                </div>
            )}
            {listWeatherResults(weatherResults)}
        </div>
    )
}

export default WeatherResults;
