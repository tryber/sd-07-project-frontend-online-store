import React, { Component } from 'react';

class Listagem extends Component {
  render() {
    return(
      <div>
        <input type="text" id="list"></input>
        <label htmlFor="list" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
      </div>
    )
  }
}

export default Listagem;
