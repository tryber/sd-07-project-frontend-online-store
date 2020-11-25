import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input name="search" type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Home;
