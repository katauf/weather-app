import React from 'react';
import '../styles/WeatherPresentation.css';


const WeatherPresentation = ({forecast, city} ) => {

    let time = forecast.map(x => x.dt_txt);
    let temp = forecast.map(m => Math.round(m.main.temp));
    let icon = forecast.map(i => i.weather[0].icon);
    let description = forecast.map(f => f.weather[0].description);
    
    return (<div className="current">
        <h3 className="text-info">{city.name}</h3>
        <p>{time[0]}</p>
        <p>{temp[0]}&deg;</p>
        <p>{description[0]}</p>
        <img src={`http://openweathermap.org/img/wn/` + icon[0]+ `.png`} alt=""></img> 
    </div>);
}

export default WeatherPresentation;
