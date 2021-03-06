import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lastUpdated from '../../utils/timeDescriptions';
import'./styles.css';


const CityCard = (props) => {

    const {city, onClick} = props;

    return [
        <button
            className='city-card-cross'
            onClick={() => onClick(city.city) }
            key='button'
        >
            <FontAwesomeIcon icon={faTimes} />
        </button>,
        <p className='city-card-updated city-card-item' key='lastUpdated'> 
            {lastUpdated(city.measurements)}
        </p>,
        <h2 className='city-card-location-title city-card-item' key='title'>
            {city.location}
        </h2>,
        <p className='city-card-location-city city-card-item' key='city'> 
            In {city.city}, United Kingdom
        </p>,
        <div className='city-card-measurements city-card-item' key='measurements'> 
            Values: {city.measurements.map((measurement, i) => {
                return(
                    <span key={Math.random()}>{`${measurement.parameter}: ${measurement.value}${city.measurements.length -1 === i ? '' : ', '} `}</span>
                )
            })}
        </div>
    ]
}

export default CityCard;