import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ search, handleSearchChange }) => {
  return (
    <form>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
    </form>
  );
};

const CountryInfo = ({ country }) => {
  const altText = `Flag of ${country.name}`;
  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(l => <li key={l.name}>{l.name}</li>)}
      </ul>
      <img src={country.flag} width="100" alt={altText} />
    </>
  );
};

const Results = ({ search, countries }) => {
  const matches = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  if (search.length === 0 || matches.length === 0) {
    return (
      <p>No matches</p>
    );
  }

  if (matches.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    );
  }

  if (matches.length > 1) {
    return (
      <>
        {matches.map(c => <p key={c.name}>{c.name}</p>)}
      </>
    );
  }

  if (matches.length === 1) {
    return (
      <CountryInfo country={matches[0]} />
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);



  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Results search={search} countries={countries} />
    </>
  );
};

export default App;
