import React, { useRef } from 'react';
import './WeatherSearch.css';

const WeatherSearch = ({search}) => {

    const searchValue = useRef();
    
    return (<div className="form">
    <label>Välj stad: </label>
    <input type="text" ref={searchValue} />
    <button onClick={() => search(searchValue.current.value)}>Sök</button>
    </div>);
}

export default WeatherSearch;
