/*
import react from 'react';
import reactDom from 'react-dom';
import EXCERCICE1 from './exercice1/Exercice1';

const application = (
  <div>
    {heading}
    {html}
  </div>
)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import htmlLogo from './assets/img/html_logo.png'
import cssLogo from './assets/img/css_logo.png'
import jsLogo from './assets/img/js_logo.png'
import reactLogo from './assets/img/reactjs_logo.png'
import css from './index.css'

const heading = "Front End Technologies"
const html = (
    <div className="header-container" >
        <div className="header-list">
          <div className="list-items">
              <img src={htmlLogo} ></img>
          </div>
          <div className="list-items">
              <img src={cssLogo} ></img>
          </div>
          <div className="list-items">
              <img src={jsLogo} ></img>
          </div>
          <div className="list-items-reactjs">
              <img src={reactLogo} ></img>
          </div>
        </div>
    </div>
)

const application = (
  <div className="container">
    <p className="heading">{heading}</p> 
    {html}
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(application, rootElement);