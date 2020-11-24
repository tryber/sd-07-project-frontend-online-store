import React, { Component } from 'react';

class Listagem extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default Listagem;
