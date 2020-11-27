import React from 'react';

import './style.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <header className="header">
          <form>
            <input
              className="search-input"
              type="text"
              placeholder="Pesquise por produtos"
            />
            <button type="submit">Pesquisar</button>
          </form>
          <button type="button">Carrinho</button>
        </header>
        <main>
          <h1>Products Grid</h1>
        </main>
      </div>
    );
  }
}

export default Main;
