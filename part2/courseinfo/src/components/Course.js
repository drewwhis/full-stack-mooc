import React from 'react';

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  );
};

const Part = ({ details }) => {
  return (
    <p>
      {details.name} {details.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} details={part} />
      )}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <p><strong>total of {total} exercises</strong></p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;