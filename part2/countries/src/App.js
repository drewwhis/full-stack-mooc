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
  if (country === null) {
    return (
      <></>
    );
  }
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

const Results = ({ search, countries, selectCountry, country }) => {
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

  const generateClickHandler = country => {
    return () => {
      selectCountry(country);
    };
  };

  if (matches.length > 1) {
    return (
      <>
        {matches.map(c =>
          <div key={c.name}>{c.name} <button onClick={generateClickHandler(c)}>show</button></div>
        )}
        <CountryInfo country={country} />
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
  const [country, setCountry] = useState(null);

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

  const handleCountrySelect = selectedCountry => {
    setCountry(selectedCountry);
  };

  return (
    <>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Results search={search} countries={countries} selectCountry={handleCountrySelect} country={country} />
    </>
  );
};

export default App;
