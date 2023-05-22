/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import WeatherDataService from "src/services/WeatherDataService";
import IWeatherHistoryData from "src/types/WeatherData/WeatherHistoryData";

const GetHeatherHistory = () => {
    const initWeatherHistoryData = [
        {searchData: {
            city: "",
            temperature: "",
            wind: "",
            description: ""
        }}
    ];

    const [currentWeatherHistoryData, setCurrentWeatherHistoryData] = useState(initWeatherHistoryData);

    const getWeatherHistory = async () => {
        try{
            const response = await WeatherDataService.getHistory();
            setCurrentWeatherHistoryData(response.data);
            console.log(response);
        }catch(error){
            alert(error);
        }
    }

    useEffect(()=>{
        getWeatherHistory();
    }, []);

    return (
        <div>
            {currentWeatherHistoryData ? (
                <div>
                </div>
            ): ""}
        </div>
    )
};

export default GetHeatherHistory;
