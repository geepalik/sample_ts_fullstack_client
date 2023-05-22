import http from "src/http-common";
import IWeatherHistoryData from "src/types/WeatherData/WeatherHistoryData";

const getHistory = () => {
    return http.get(`${process.env.WEATHER_API_LINK}/getWeatherHistory`);
};

const WeatherDataService = {
    getHistory
};

export default WeatherDataService;
