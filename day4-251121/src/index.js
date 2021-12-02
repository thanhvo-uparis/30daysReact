import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>thanh vo</p>
      <p>28 Novembre 2021</p>
    </div>

  )
}

const Application = () => (
  <div>
    <Header/>
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(<Application/>, rootElement);