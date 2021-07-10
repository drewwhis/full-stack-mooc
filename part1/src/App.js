import React, { useState } from 'react'

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  // const name = 'Peter';
  // const age = 10;
  // return (
  //   <>
  //     <h1>Greetings</h1>
  //     <Hello name='Maya' age={26+10} />
  //     <Hello name={name} age={age} />
  //     <Footer />
  //   </>
  // );
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  console.log('rendering...', counter);

  return (
    <>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </>
  );

};

export default App;