import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
      </div>
    );
  }
}

export default Main;
