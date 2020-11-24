import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </header>
    </div>
  );
}

export default App;
