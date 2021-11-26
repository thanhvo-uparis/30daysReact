/*
ReactDOM.render(
  <React.StricMode>
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>Javascript Library</h3>
          <p>Nicola Vincent</p>
          <small>25 Novembre 21</small>
      </div>
  )
}

/*
const Header = () => (
    <div>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>Javascript Library</h3>
        <p>Nicola Vincent</p>
        <small>25 Novembre 21</small>
  </div>
)

*/

const Application = () => (
  <div>
    <Header/>
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(<Application/>, rootElement);