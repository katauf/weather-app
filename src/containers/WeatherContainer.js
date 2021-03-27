import React, { useState, useEffect } from 'react';
import ForecastPresentation from '../components/ForecastPresentation';
import WeatherPresentation from '../components/WeatherPresentation';
import WeatherSearch from '../components/WeatherSearch';


const WeatherContainer = () => {

    const [cityName, setCityName] = useState({});
    const [dailyWeather, setDailyWeather] = useState([]);
   
    useEffect( () => {

        const url = "https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&lang=sv&units=metric&appid=cc2e33e5dff469e16960b7017b4b53ad";

        fetch(url)
        .then(response => response.json())
        .then(jsonItems => {
            
            const {list, city}= jsonItems;
                
                setDailyWeather(list);
                setCityName(city);
                
        });

    },[]);

        const search = (searchText) => {

            const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchText +"&lang=sv&units=metric&appid=cc2e33e5dff469e16960b7017b4b53ad";
           
            fetch(url)
            .then(response => response.json())
            .then(jsonObj => {
                
                const {list, city}= jsonObj;
                
                setDailyWeather(list);
                setCityName(city);
            });

        }
    
    return (<>
        <WeatherSearch search = {search} />
        <WeatherPresentation forecast={dailyWeather} city={cityName} />
        <ForecastPresentation forecast={dailyWeather} />
        </>)
}
    

export default WeatherContainer;
