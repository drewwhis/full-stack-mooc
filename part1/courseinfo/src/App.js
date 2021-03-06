import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.details.name} {props.details.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part details={props.course.parts[0]} />
      <Part details={props.course.parts[1]} />
      <Part details={props.course.parts[2]} />
    </>
  );
};

const Total = (props) => {
  const parts = props.course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>Number of exercises {total}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, {
        name: 'Using props to pass data',
        exercises: 7
      }, {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;