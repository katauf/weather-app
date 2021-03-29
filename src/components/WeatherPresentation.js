import React from 'react';
import '../styles/WeatherPresentation.css';
import solupp from '../images/solupp.jpg';
import solner from '../images/solner.jpg';

const WeatherPresentation = ({forecast, city} ) => {

    let time = forecast.map(x => x.dt_txt);
    let temp = forecast.map(m => Math.round(m.main.temp));
    let feel = forecast.map(f => Math.round(f.main.feels_like));
    let icon = forecast.map(i => i.weather[0].icon);
    let description = forecast.map(f => f.weather[0].description);

    let sunUp = city.sunrise;
    let up = new Date(sunUp * 1000);
    let sunrise = ('0' + up.getHours()).slice(-2) + ':' + ('0' + up.getMinutes()).slice(-2);

    let sunDown = city.sunset;
    let down = new Date(sunDown * 1000);
    let sunset = ('0' + down.getHours()).slice(-2) + ':' + ('0' + down.getMinutes()).slice(-2);

    return (<div className="current d-inline-flex p-3 ">
    <div className="">
        <h3 className="text-info mt-0 mb-4">{city.name}</h3>
            <div className="row ml-0">
                <img className="mr-5" src={solupp} alt="solupp" />
                <img src={solner} alt="solner" />
            </div>
            <div className="row ml-0">
                <p className="text-secondary mr-5">{sunrise}</p>
                <p className="text-secondary ml-3">{sunset}</p>
            </div>
            <div>
                <p>{time[0]}</p>
                <p>{temp[0]}&deg;C</p><p>Känns som {feel[0]}&deg;C</p>
                <p>{description[0]}</p>
                <img src={`http://openweathermap.org/img/wn/` + icon[0]+ `.png`} alt=""></img> 
            </div>
        </div>
    </div>);
}

export default WeatherPresentation;
