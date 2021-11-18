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
import './index.css';
import myprofil from './meo_may_man.png';

const title = <h1>Welcome to 30 Days Of React</h1>;
const subTitle = <h2>Getting Started React</h2>;
const library = <h3>Javascript Library</h3>;
const instructor = {
  firstName: "thanh",
  lastName: "vo"
};
const date = <p>18 Novembre 21</p>;

const user = (
  <div>
    <img src={myprofil} alt = "image of user"></img>
  </div>
)

const toGetStarted = (
  <div>
      <h3>Prerequisite to get started</h3>
      <strong>
        <em>react.js</em>
      </strong>
  </div>
) 

const application = (
  <div>
      <div className="header-wrapper">
          {title}
      </div>
      {subTitle}
      {library}
      <p>Instructor: {instructor.firstName} {instructor.lastName}</p>
      <p>Date: {date}</p>
      {user}
      {toGetStarted}
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(application, rootElement);

