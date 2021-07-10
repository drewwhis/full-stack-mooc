import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Feedback = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
    </>
  );
};

const Statistic = ({ name, calculator }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{calculator()}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + bad + neutral;
  const average = () => (good - bad) / total();
  const positive = () => (100 * (good / total())) + ' %';

  if (total(good, bad, neutral) === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic name='good' calculator={() => good} />
          <Statistic name='neutral' calculator={() => neutral} />
          <Statistic name='bad' calculator={() => bad} />
          <Statistic name='total' calculator={total} />
          <Statistic name='average' calculator={average} />
          <Statistic name='positive' calculator={positive} />
        </tbody>
      </table>

    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => setGood(good + 1);
  const onNeutralClick = () => setNeutral(neutral + 1);
  const onBadClick = () => setBad(bad + 1);

  return (
    <>
      <Feedback handleGoodClick={onGoodClick} handleNeutralClick={onNeutralClick} handleBadClick={onBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;