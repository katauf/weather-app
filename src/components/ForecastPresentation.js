import React from 'react';
import '../styles/ForecastPresentation.css';

const ForecastPresentation = ({forecast} ) => {

    let time = forecast.map(x => x.dt_txt);
    let minTemp = forecast.map(m => Math.round(m.main.temp_min));
    let maxTemp =  forecast.map(m => Math.round(m.main.temp_max));
    let icon = forecast.map(i => i.weather[0].icon);

    return (<div className="box">
    <table className="table table-borderless table-sm">
        <thead className="font-weight-bold text-info"><tr><td>5-dagarsprognos: </td></tr></thead>
        <tbody>
            <tr>    
                <td>{time[8]}</td>
            </tr>
            <tr>
                <td>Min: {minTemp[8]}&deg;</td>
                <td>Max: {maxTemp[8]}&deg;</td>
            </tr>
            <tr>
                <td><img src={`http://openweathermap.org/img/wn/` + icon[8]+ `.png`} alt=""></img></td> 
            </tr>
            <tr>
                <td>{time[16]}</td>
            </tr>
            <tr>
                <td>Min: {minTemp[16]}&deg;</td>
                <td>Max: {maxTemp[16]}&deg;</td>
            </tr>
            <tr>
                <td><img src={`http://openweathermap.org/img/wn/` + icon[16]+ `.png`} alt=""></img></td>
            </tr>
            <tr>
                <td>{time[24]}</td>
            </tr>
            <tr>
                <td>Min: {minTemp[24]}&deg;</td>
                <td>Max: {maxTemp[24]}&deg;</td>
            </tr>
            <tr>
                <td><img src={`http://openweathermap.org/img/wn/` + icon[24]+ `.png`} alt=""></img></td>
            </tr>
            <tr>
                <td>{time[32]}</td>
            </tr>
            <tr>
                <td>Min: {minTemp[32]}&deg;</td>
                <td>Max: {maxTemp[32]}&deg;</td>
            </tr>
            <tr>
                <td><img src={`http://openweathermap.org/img/wn/` + icon[32]+ `.png`} alt=""></img></td>
            </tr>
            <tr>
                <td>{time[39]}</td>
            </tr>
            <tr>
                <td>Min: {minTemp[39]}&deg;</td>
                <td>Max: {maxTemp[39]}&deg;</td>
            </tr>
            <tr>
                <td><img src={`http://openweathermap.org/img/wn/` + icon[39]+ `.png`} alt=""></img></td>
            </tr>
        </tbody>
    </table>
    </div>);
}

export default ForecastPresentation;