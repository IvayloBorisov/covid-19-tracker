import axios from 'axios';

const BASE_URL = "https://covid19.mathdro.id/api";

export const fetchData = async() => {
    
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(BASE_URL);

        return { confirmed, recovered, deaths, lastUpdate, }
    } catch (error) {
        
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${ BASE_URL }/daily`);

        const modifiedData = data.map(data => {
            return { 
                     confirmed: data.confirmed.total,
                     deaths: data.deaths.total, 
                     date: data.reportDate 
                    }
        });
        return modifiedData;
       
    } catch (error) {
        
    }
}

export const fetchCountriesData = async() => {

    try {
        const { data: { countries } }  = await axios.get(`${ BASE_URL }/countries`);

        return countries.map(country => country.name);
    } catch (error) {
        
    }
}

export const getCountryData = async (country) => {
   try {
       const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${ BASE_URL }/countries/${ country }`);

       return { confirmed, recovered, deaths, lastUpdate };

   } catch (error) {
       
   }
}