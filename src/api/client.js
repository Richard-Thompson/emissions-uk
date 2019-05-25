import axios from 'axios';

class api {
    getCities = async () => {
        return await axios
            .get('https://api.openaq.org/v1/cities?country=GB&limit=112')
            .then((result) => {
                return { result };
            })
            .catch((error) => {
                return { error };
            });
    };

    getCity = async (city)=> {
        return await axios
            .get(`https://api.openaq.org/v1/latest?city=${city}`)
            .then((result) => {
                return { result };
            })
            .catch((error) => {
                return { error };
            });
    }
}

export default new api();