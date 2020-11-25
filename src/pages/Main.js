import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        <input type="search" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Main;
