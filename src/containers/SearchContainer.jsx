import React, {useState, useEffect} from 'react';
import api from '../api/client.js';
import SearchPage from '../components/SearchPage';
import './styles.css';

const SearchContainer = () => {
    const [state, setState] = useState({cities:[]});
    const [cityList, setCityList] = useState({results:[]});
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchedCities () {
            const cities = await api.getCities();
            if (!cities['result']) {
                setError(true)
            }
            setState({cities: cities.result.data.results});
        }
        fetchedCities();
    },[]);
    
    const fetchCityCallback = async (city) => {
        const location = await api.getCity(city);
        if (!location['result']) {
            setError(true)
        }
        setCityList({results: [location.result.data.results[0], ...cityList.results]})
    }

    const onClick = (cityName) => {
        const removedItemList = cityList.results.filter((city) => {
            return city.city !== cityName;
        })
       setCityList({results: [...removedItemList]})
    }

    if (error) {
        return <p className='search-container-error'>Oops something went wrong! <br/> please refresh the page.</p>

    }
    else {
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
}

export default SearchContainer;