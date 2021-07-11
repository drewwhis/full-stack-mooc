import React, { useState } from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <form>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
    </form>
  );
};

const PersonForm = ({ addEntry, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addEntry}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons, filter }) => {
  return (
    <>
      {
        persons
          .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
          .map(p => <p key={p.name}>{p.name} {p.number}</p>)
      }
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addEntry = (event) => {
    event.preventDefault();
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>
      <PersonForm addEntry={addEntry} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;