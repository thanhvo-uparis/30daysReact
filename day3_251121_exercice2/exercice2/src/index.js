import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';

const heading = "SUBSCRIBE"
const title = "Sign up with your email adress to receive news and updates."
const champs = (
  <div className="champs-container">
    <div className="inputContainer">
        <input className="inputItems">First name</input>
        <input className="inputItems">Last name</input>
        <input className="inputItems">Email</input>
    </div>
  </div>
)

const btnSubmit = (
  <div className="btn-submit">
    <button>
      Subscribe
    </button>
  </div>
)

const application = (
  <div>
    <h1>{heading}</h1>
    <p>{title}</p>
     {champs}
     {btnSubmit}
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(application, rootElement);