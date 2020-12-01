import React, { Component } from 'react';

class InitialMessage extends Component {
  render() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }
}

export default InitialMessage;
