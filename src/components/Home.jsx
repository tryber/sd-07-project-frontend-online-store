import React from 'react';

function Home() {
  return (
    <div className="Home">
      <header>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </header>
    </div>
  );
}

export default Home;
