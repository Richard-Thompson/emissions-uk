import React, {useState, useEffect} from 'react';
import api from '../api/client.js';
import SearchPage from '../components/SearchPage';
import './styles.css';

const SearchContainer = () => {
    const [state, setState] = useState({cities:[]});
    const [cityList, setCityList] = useState({results:[]});

    useEffect(() => {
        async function fetchedCities () {
            const cities = await api.getCities();
            setState({cities: cities.result.data.results});
        }
        fetchedCities();
    },[]);
    
    const fetchCityCallback = async (city) => {
        const location = await api.getCity(city);
        await setCityList({results: [...cityList.results,location.result.data.results[0]]})
    }

    const onClick = async (cityName) => {
        const removedItemList = cityList.results.filter ((city) => {
            return city.city !== cityName;
        })
       setCityList({results: [...removedItemList]})
    }

    return (
        <div className='search-page__container'>
            <SearchPage
                cities={state.cities}
                fetchCityCallback={fetchCityCallback}
                onClick={onClick}
                cityList={cityList}
            />
        </div>                
    );
}

export default SearchContainer;