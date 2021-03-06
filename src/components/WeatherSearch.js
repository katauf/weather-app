import React, { useRef } from 'react';

const WeatherSearch = ({search}) => {

    const searchValue = useRef();
    
    return (<div className="input-group input-group-sm mt-3 w-25">
    <label className="ml-3 px-2 form-text">Välj stad: </label>
    <input className="form-control rounded-lg mb-0" type="text" ref={searchValue} />
    <button className="btn btn-info px-4 ml-1 py-0" onClick={() => search(searchValue.current.value)}>Sök</button>
    </div>);
}

export default WeatherSearch;

