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
import React from "react";
import ReactDOM from "react-dom";
import htmlLogo from './html_logo.png'


const heading = "Front End Technologies"
const html = (
    <div>
        <img src={htmlLogo} ></img>
    </div>
)

const application = (
  <div>
    <p>{heading}</p> 
    {html}
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(application, rootElement);