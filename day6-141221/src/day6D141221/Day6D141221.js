//state, setState

import React from 'react';
export default class App extends React.Component {
  state = {
    count: 0
  } 

    addOne = () => {
        this.setState({count: this.state.count +1});
    }

    minus = () => {
      this.setState({count: this.state.count - 1});
  }

    reset = () => {
      this.setState({count: 0});
    }


  render() {
    const count = this.state.count;
    return (
        <div>
          <p>Welcome to 30 Days of React</p>
          <p>{count}</p>
          <button onClick={this.addOne}>Add One</button>
          <button onClick={this.minus}>Minus One</button>
          <br/>
          <button onClick={this.reset}>Reset Number</button>

        </div>
      )
    }
}