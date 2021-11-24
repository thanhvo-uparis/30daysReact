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

const welcome = <h1>Welcome to 30 Days Of React</h1>
const title = <h2>Getting Started React</h2>
const subtitle = <h3>Javascript Library</h3>
let author = {
    firstName: 'thanh',
    lastName: 'vo'
}
let date = "22 Semptembre 21"

const header = (
  <div>
      {welcome}
      {title}
      {subtitle}
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <p>Date: {date}</p>
  </div>
)


const titleLanguages = "Prerequisite to get started"
const reactjs = (
    <strong>
        <em>
          react.js
        </em>
    </strong>
)

let numOne = 3;
let numTwo = 2;

let yearBorn = 1997;
let currentYear = 2021;
let age = currentYear - yearBorn;

const techs = [
  'Java', 'C', 'Python'
]

const techsItem = techs.map(tech => <li>{tech}</li>)

const main = (
    <div>
        <p>{titleLanguages} {reactjs}</p>
        <ul>
          {techsItem}
        </ul>
        {numOne} + {numTwo} = {numOne + numTwo}
        <p>{author.firstName} {author.lastName} is {age} years old </p> 
    </div>

)

const footer = <p>Copyright 2021</p>

const user = (
  <div>
      <img src= {imgUser} alt='image of user'></img>
  </div>
)

const application = (
    <div>
      {header}
      {main}
      {user}
      {footer}
    </div>
)


