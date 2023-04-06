import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { Link } from 'react-router-dom';


export const HomePage = () => {
  const [countries,setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/countries')
    .then ((response) => response.json())
    .then((data) => setCountries(data))
  }, []);

  return (
    <div>
      <NavBar/>
      <div className='country-container'>
      {countries.map((country) => (
        <Link to = {`/country/${country.id}`} className='country-card' key={country.id}>
          <img src={country.flag} alt={country.name} />
          <h3>{country.name}</h3>
          <p>{country.continent}</p>
        </Link>
      ))}
      </div>
    </div>
  );
};
