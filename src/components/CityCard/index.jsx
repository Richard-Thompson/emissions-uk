import React from 'react';
import lastUpdated from '../../utils/timeDescriptions';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import'./styles.css';


const CityCard = ({city, onClick}) => {
    return [
        <button
            className='city-card-cross'
            onClick={() => {onClick(city.city)} }
        >
            <FontAwesomeIcon icon={faTimes} />
        </button>,
        <p className='city-card-updated city-card-item'> 
            {lastUpdated(city.measurements)}
        </p>,
        <h2 className='city-card-location-title city-card-item'>
            {city.location}
        </h2>,
        <p className='city-card-location-city city-card-item'> 
            In {city.city}, United Kingdom
        </p>,
        <p className='city-card-measurements city-card-item'> 
            Values: {city.measurements.map((measurement, i) => {
                return(
                    `${measurement.parameter}: ${measurement.value}${city.measurements.length -1 === i ? '' : ','} `
                )
            })}
        </p>
    ]
}

export default CityCard;