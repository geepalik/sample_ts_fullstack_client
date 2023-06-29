/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import WeatherDataService from 'src/services/WeatherDataService';
import IWeatherSearchResultsData from 'src/types/WeatherData/WeatherSearchResultsData';
import WeatherResults from '../WeatherResults';

const SearchWeather = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const initSearchResults: IWeatherSearchResultsData = {
    searchData: []
  };
  const [searchResults, setSearchResults] = useState<IWeatherSearchResultsData>(initSearchResults);
  const [loadingData, setLoadingData] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try{
        setLoadingData(true);
        const response: IWeatherSearchResultsData = await WeatherDataService.searchHistory({cities: searchQuery});
        setSearchResults(response);
    }catch(error){
        //TODO: component to show errors
        alert(error.response.data.error);
    }finally{
        setLoadingData(false);
    }
  };

  const searchForm = () => (
    <form onSubmit={handleSearch}>
        <div>
            <input value={searchQuery} onChange={handleChange}/>
        </div>
        <div>
            <button type="submit">Search</button>
        </div>
    </form>
  )

  return (
    <div>
        {searchForm()}
        <WeatherResults weatherResults={searchResults} />
        {loadingData && (
            <div>Searching...</div>
        )}
    </div>
  );
};

export default SearchWeather;
