/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import WeatherDataService from "src/services/WeatherDataService";
import IWeatherHistoryData from "src/types/WeatherData/WeatherHistoryData";

const GetHeatherHistory = () => {
    const initWeatherHistoryData: Array<IWeatherHistoryData> = [
        {searchData: [{
            city: "",
            temperature: "",
            wind: "",
            description: ""
        }],
        createdAt: ""
    }
    ];

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

    const [currentWeatherHistoryData, setCurrentWeatherHistoryData] = useState<Array<IWeatherHistoryData>>(initWeatherHistoryData);

    const getWeatherHistory = async () => {
        try{
            const response: Array<IWeatherHistoryData> = await WeatherDataService.getHistory();
            setCurrentWeatherHistoryData(response);
        }catch(error){
            alert(error);
        }
    }

    useEffect(()=>{
        getWeatherHistory();
    }, []);

    const showHistory = (historyData: Array<IWeatherHistoryData>) => (
        historyData.map((historyItem, index) => (
            <div className="row" key={index}>
                <div className="cell">{formatDateTime(historyItem.createdAt)}</div>
                <div className="cell">{historyItem.searchData.map((searchItem) => searchItem.city).join(", ")}</div>
            </div>
        ))
    )

    const formatDateTime = (dateTimeString: string): string => {
        const dateObject = new Date(dateTimeString);
        return `${months[dateObject.getMonth()]} ${dateObject.getDate()} ${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject.getMinutes()}`;
    }


    return (
        <div className="table">
            {currentWeatherHistoryData.length > 0 && (
                <div className="row">
                    <div className="cell">Time</div>
                    <div className="cell">Cities</div>
                </div>
            )}
            {showHistory(currentWeatherHistoryData)}
        </div>
    )
};

export default GetHeatherHistory;
