import React, {useEffect, useState, Suspense, lazy} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './styles.css';
const CityCard = lazy(() => import('../CityCard'));

const SearchPage = (props) => {
const {cities, fetchCityCallback, cityList, onClick} = props;

    const [options,setOptions] = useState({});
    const [dropdownValue, setDropdownValue] = useState('');

    useEffect(()=> {
        const dropdownOptions = cities && cities.map((item, i)=> {
            return {key: i, value: item.city, text: item.city}
        });

        setOptions({dropdownOptions});
    },[cities]);

    const onChange = async (event, selected) => {
        if (!selected.value) return;
        await fetchCityCallback(selected.value);

        // Reset the dropdown selected value to default 
        //allows user to reselect same city after removing
        //it from the list.
        setDropdownValue('')

        //This is to blur the active element
        // allowing the mobile virtual keyboard
        //to close. Better UX.
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
                    value={dropdownValue}
                />
            </div>
            <Suspense 
                fallback={
                    <div className='city-card-loading'>
                        Loading...
                    </div>
                }
            >
                <div className='city-card-list'>
                    {cityList && cityList.results.map((city) => {
                        return (
                            <div className='city-card-container' key={Math.random()}> 
                                <CityCard
                                    city={city}
                                    onClick={onClick}                           
                                />
                            </div>
                        )
                    })}
                </div>
            </Suspense>
        </div>
    )
}

export default SearchPage;