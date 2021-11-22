/*
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import imgUser from './meo_may_man.png';

const heading = <h1>Welcome to 30 Days Of React</h1>
const started = <h2>Getting Started React</h2>
const library = <h3>Javascript Library</h3>
let instructor = {
    firstName: 'thanh',
    lastName: 'vo'
}
let fullName = <div>{instructor.firstName} {instructor.lastName}</div>;
let date = "22 Semptembre 21"

const header = (
  <div>
      {heading}
      {started}
      {library}
      <p>Instructor: {instructor.firstName} {instructor.lastName}</p>
      <p>Date: {date}</p>
  </div>
)

const reactjs = (
    <strong>
        <em>
          react.js
        </em>
    </strong>
)
const titleLanguages = "Prerequisite to get started"

let firstInput = 3;
let secondInput = 2;

let naissance = 1997;
let year = 2020;
let age = {year} {naissance};

const languageBody = (
    <div>
        <p>{titleLanguages} {reactjs}</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        {firstInput} + {secondInput}
        <p>{fullName} is {age} years old </p> 
    </div>

)

const user = (
  <div>
      <img src= {imgUser} alt='image of user'></img>
  </div>
)

const application = (
    <div>
      {header}
      {languageBody}
      {user}
    </div>
)


const rootElement = document.getElementById('root');
ReactDOM.render(application, rootElement);

