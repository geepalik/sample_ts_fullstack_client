/* eslint-disable prettier/prettier */
import http from "src/util/http-common";
import { ISearchWeatherBody } from "src/types/WeatherData/SearchWeatherBody";
import IWeatherHistoryData from "src/types/WeatherData/WeatherHistoryData";
import IWeatherSearchResultsData from "src/types/WeatherData/WeatherSearchResultsData";

const getHistory = async (): Promise<Array<IWeatherHistoryData>> => {
    const response = await http.get<Array<IWeatherHistoryData>>(`${process.env.WEATHER_API_LINK}/getWeatherHistory`);
    return response.data;
};

const searchHistory = async (searchBody: ISearchWeatherBody): Promise<IWeatherSearchResultsData> => {
    const response = await http.post(`${process.env.WEATHER_API_LINK}/searchWeather`, searchBody);
    return response.data;
};

const WeatherDataService = {
    getHistory,
    searchHistory
};

export default WeatherDataService;
