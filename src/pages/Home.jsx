import React from 'react';
import ListCategory from '../components/ListCategory';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input name="search" type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div>
          <ListCategory />
        </div>
      </div>
    );
  }
}

export default Home;
