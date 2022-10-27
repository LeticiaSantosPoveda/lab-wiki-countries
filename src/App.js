
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  const [countriesData, setCountriesData] = useState([]);

      useEffect(()=>{
        axios.get(apiURL)
        .then(results=>{
            setCountriesData(results.data);
        })
    }, []);


  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesData}/>} />
        <Route path="/:id" element={ <CountryDetails countries={countriesData} />} />
      </Routes>
    </div>
  );
}
export default App;

