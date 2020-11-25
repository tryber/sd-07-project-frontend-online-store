import React from 'react';
import Sidebar from './Sidebar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
