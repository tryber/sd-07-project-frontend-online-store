import React from 'react';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Digite....'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default InitialScreen;
