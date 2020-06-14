import React from 'react';

import styles from './App.module.css'

import { Cards, Chart, CountryPicker, Header } from './components';
import { fetchData, getCountryData } from './api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
      countryData: {}
    }
  }

  async componentDidMount() {
    const getData = await fetchData();

    this.setState({ data: getData });
  }

  handleCountryChange = async(country) => {
    const countryData = await getCountryData(country);
    this.setState({ countryData: countryData, country });
  }

  render() {

    const { data, countryData, country } = this.state;

    return (
      <div className={ styles.container }>
       <Header />
       <Cards data={ data }/>
       <CountryPicker handleChange={ this.handleCountryChange }/>
       <Chart data={ countryData } country={ country }/>
      </div>
    );
  }
 
}

export default App;
