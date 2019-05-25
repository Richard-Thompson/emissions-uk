import React, {useEffect, useState, Suspense, lazy} from 'react';
import { Dropdown } from 'semantic-ui-react';
// import CityCard from '../CityCard';
import './styles.css';
const CityCard = lazy(() => import('../CityCard'));

const SearchPage = ({cities, fetchCityCallback, cityList, notification, onClick}) => {

    const [options,setOptions] = useState({});

    useEffect(()=> {
        const dropdownOptions = cities && cities.map((item)=> {
            return {key: item.city, value: item.city, text: item.city}
        });

        setOptions({dropdownOptions});
    },[cities]);

    const onChange = async (event, selected) => {
        if (!selected.value) return;
        event.target.blur();
        await fetchCityCallback(selected.value);
        document.activeElement.blur();
        
    }

    return (
        <div className='search-page container'>
            <h1 className='search-page-title'>Compare your Air</h1>
            <p className='search-page-description'>
                Compare the air quality between cities in the uk. <br/>
                Select cities to compare using the search tool below.
            </p>
            <div className='search-page-dropdown'>
                <Dropdown
                    icon='search'
                    placeholder='Enter city name...'
                    fluid
                    search
                    inline={true}
                    autoComplete='on'
                    selectOnNavigation={false}
                    selectOnBlur={false}
                    upward={false}
                    options={options.dropdownOptions}
                    onChange={onChange}
                />
            </div>
            <div className='city-card-list'>
                {cityList && cityList.results.map((city, i) => {
                    return (
                        <Suspense 
                            key={i} 
                            fallback={
                            <div 
                                className='city-card-loading'>
                                Loading...
                            </div>
                            }>
                            <div className='city-card-container'>
                                <CityCard
                                    city={city}
                                    onClick={onClick}
                                />
                            </div>
                        </Suspense>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage;