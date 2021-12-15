/*
export default class App extends React.Component {
    state = {
      count: 0
    }

    render() {
      const count = this.state.count;

      return(
        <div>
          <p>Welcome to 30 Days Of React</p>
          <p>{count}</p>
          <button onClick={() => this.setState({count: this.state.count + 1})}>Add One</button>
          <button onClick={() => this.setState({count: this.state.count - 1})}>Minus One</button>
          <br/>
          <button onClick={() => this.setState({count: 0})}>Reset Number</button>
        </div>
      )
    }
}
*/
import React from 'react';

export default class App extends React.Component {
  state = {
    count: 0
  }

  addOne = () => {
      this.setState({count: this.state.count + 1});
  }

  minusOne = () => {
    this.setState({count: this.state.count - 1});
}

  render() {
    const count = this.state.count;
    return(
      <div>
          <p>Welcome to 30 Days Of React</p>
          <p>{count}</p>
          <button onClick={this.addOne}>Add One</button>
          
      </div>
    )
  }
}