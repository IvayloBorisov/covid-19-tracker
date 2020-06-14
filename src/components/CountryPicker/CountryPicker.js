import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountriesData } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleChange }) => {
    const [ countriesName, setCountry ] = useState([]);

    useEffect(() => {
        const getCountryData = async () => {
            setCountry( await (fetchCountriesData()) )
        }
        getCountryData();
    }, [ setCountry ]);

    return(
       <FormControl className={ styles.container }>
        <NativeSelect defaultValue="" onChange={ event => handleChange(event.target.value) }>
         <option value="">Global</option>
          { countriesName.map((name, index) => <option key={ index } value={ name }>{ name }</option>) }
        </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;